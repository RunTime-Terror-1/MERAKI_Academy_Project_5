const express = require("express");

const { createRequest, createRestaurant ,createEmployee, deleteEmployee,getOwnerRequests,getOwnerRestaurants,deleteRequest
} = require("../controllers/owner");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const ownerRouter = express.Router();
//get
ownerRouter.get("/requests",authentication,authorization("2"),getOwnerRequests)
ownerRouter.get("/restaurants",authentication,authorization("2"),getOwnerRestaurants)
//post
ownerRouter.post("/request", authentication, authorization("2"), createRequest);
ownerRouter.post("/restaurant", authentication, authorization("2"), createRestaurant);
ownerRouter.post("/employee", authentication, authorization("2"), createEmployee);

//delete
ownerRouter.delete("/employee", authentication, authorization("2"), deleteEmployee);
ownerRouter.delete("/request", authentication, authorization("2"),deleteRequest);
//deleteRequest

module.exports = ownerRouter;
