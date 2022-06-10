const express = require("express");

const {
  createOwner,
  deleteOwner,
  getAllRequests,
  acceptRequest,
  getAllUsers,
  getAllOwners,
  getAllRestaurants,
} = require("../controllers/superAdmin");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const superAdminRouter = express.Router();
//post
superAdminRouter.post(
  "/owner",
  authentication,
  authorization("1"),
  createOwner
);

//delete
superAdminRouter.delete(
  "/delete/owner",
  authentication,
  authorization("1"),
  deleteOwner
);

//get
superAdminRouter.get(
  "/requests",
  authentication,
  authorization("1"),
  getAllRequests
);
superAdminRouter.get(
  "/users",
  authentication,
  authorization("1"),
  getAllUsers,
);

superAdminRouter.get(
  "/owners",
  authentication,
  authorization("1"),
  getAllOwners,
);

superAdminRouter.get(
  "/restaurants",
  authentication,
  authorization("1"),
  getAllRestaurants,
);

//put
superAdminRouter.put(
  "/requests",
  authentication,
  authorization("1"),
  acceptRequest
);


module.exports = superAdminRouter;
