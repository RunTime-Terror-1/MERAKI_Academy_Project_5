const express = require("express");

 const { register } = require("../controllers/register");

const registerRouter = express.Router();

registerRouter.post('/:roleId',register);


module.exports = registerRouter;
