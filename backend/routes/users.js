const express = require("express");


const {deleteUserById,getAllUsers} = require("../controllers/users");

const userRouter = express.Router();
//get
userRouter.get("/",getAllUsers);

//delete
userRouter.delete("/:userId",deleteUserById);



module.exports = userRouter;
