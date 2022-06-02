const express = require("express");


const { createNewRole, createPermission  } = require("../controllers/role");

const roleRouter = express.Router();


roleRouter.post("/",createNewRole)
roleRouter.post("/:role_id/permission",createNewRole)
module.exports = roleRouter;
