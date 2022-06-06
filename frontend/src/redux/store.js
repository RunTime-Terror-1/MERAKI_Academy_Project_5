import {configureStore} from "@reduxjs/toolkit"
import superAdminReducer from "./reducers/superAdmin"

import authReducer from "./reducers/auth";


export default configureStore({
    reducer:{

        auth:authReducer,


        superAdminPanel: superAdminReducer

    }
})