const express = require("express");

const { createRequest,deleteOwner, getAllRequests ,acceptRequest} = require("../controllers/owner");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const ownerRouter = express.Router();
//post
ownerRouter.post(
  "/request",
  authentication,
  authorization("2"),
  createRequest
);

//delete
ownerRouter.delete(
    "/delete/owner",
    authentication,
    authorization("4"),
    deleteOwner
  );

  //get
  ownerRouter.get(
    "/requests",
    authentication,
    authorization("1"),
    getAllRequests,
  );

  //put
  ownerRouter.put(
    "/requests",
    authentication,
    authorization("1"),
    acceptRequest,
  );
  
module.exports = ownerRouter;
