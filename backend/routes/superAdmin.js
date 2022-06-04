const express = require("express");

const {
  deleteUserById,
  getAllUsers,
  createAdmin,
  deleteAdmin,
  getAllRestaurants,
} = require("../controllers/superAdmin");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const superAdminRouter = express.Router();
//get
superAdminRouter.get("/", getAllUsers);
superAdminRouter.get(
  "/restaurants",
  authentication,
  authorization("1"),
  getAllRestaurants
);

//delete
superAdminRouter.delete("/:userId", deleteUserById);
superAdminRouter.delete("/admin/:adminId", deleteAdmin);

//post
superAdminRouter.post("/admin", createAdmin);

module.exports = superAdminRouter;
