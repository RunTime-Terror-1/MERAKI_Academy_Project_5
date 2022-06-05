import {configureStore} from "@reduxjs/toolkit"
import superAdminReducer from "./redusers/superAdmin"

export default configureStore({
    reducer:{
        superAdminPanel: superAdminReducer
    }
})