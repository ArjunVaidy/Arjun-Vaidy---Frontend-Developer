import {configureStore} from "@reduxjs/toolkit"
import {capsuleReducer} from "./redux/getCapsulesList"

export const store = configureStore({
    reducer: {
        capsulesData:capsuleReducer
    }
})