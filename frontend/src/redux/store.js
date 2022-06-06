import {configureStore} from "@reduxjs/toolkit"
import superAdminReducer from "./redusers/superAdmin"

import authReducer from "./reducers/auth";


export default configureStore({
    reducer:{

        auth:authReducer,


        superAdminPanel: superAdminReducer

    }
})