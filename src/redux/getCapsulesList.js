import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


// CreateAsync has three parameters - type(string),callBack aka payloadCreator and options object
// So here capsules/getCapsules is action type string in this case
// Whenver this function is dispatched from react component --> createAsyncThunk generates promise lifecycle action types like
// capsules/getCapsules/pending , capsules/getCapsules/fulfilled and capsules/getCapsules/rejected
export const getCapsules = createAsyncThunk("capsules/getCapsules",async (thunkAPI) => {
     const response = await fetch("https://api.spacexdata.com/v3/capsules")
                .then(res => res.json())
                .catch(err => console.log(err))
    return response
})

export const capsulesSlice = createSlice(({
    name:'capsules',
    initialState: {
        capsulesList:[],
        loading:true
    },
    // TO handle sync data
    reducers: {},
    // To handle Async data
    extraReducers: (builder) => {
        // same name as createAsync function assigned
        // redux toolkit uses Immer that converts mutable to immutable logic under the hood
        builder
               .addCase(getCapsules.pending,(state,action) => {
                        state.loading = true
                }) 
               .addCase(getCapsules.fulfilled,(state,action) => {
                        state.loading = false;
                        state.capsulesList = action.payload
                }) 
               .addCase(getCapsules.rejected,(state,action) => {
                state.loading = false;
                })
    }
}))

export const capsuleReducer = capsulesSlice.reducer