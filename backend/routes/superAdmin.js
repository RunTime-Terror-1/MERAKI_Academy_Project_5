const express = require("express");

const { createOwner,deleteOwner } = require("../controllers/superAdmin");
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

module.exports = superAdminRouter;
