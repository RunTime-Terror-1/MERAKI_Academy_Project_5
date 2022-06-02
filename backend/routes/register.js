const express = require("express");
const { register } = require("../controllers/register");

// const { register } = require("../controllers/register");

const registerRouter = express.Router();

registerRouter.post('/:role_id',register);
module.exports = registerRouter;
