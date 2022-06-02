const express = require("express");


const {deleteUserById,getAllUsers,createAdmin, deleteAdmin} = require("../controllers/admin");

const adminRouter = express.Router();
//get
adminRouter.get("/",getAllUsers);

//delete
adminRouter.delete("/:userId",deleteUserById);
adminRouter.delete("/admin/:adminId",deleteAdmin);

//post 
adminRouter.post("/admin",createAdmin);




module.exports = adminRouter;
