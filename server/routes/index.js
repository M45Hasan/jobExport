const express = require("express");
const _ = express.Router();
const apiRoute = require("./api");
const api = process.env.BASE_URL;

_.use(api, apiRoute);
_.use(api, (req, res) => {
  res.send(`Api not found :${process.env.HOST_URL}${api}/(end point not match)`);
});

module.exports = _;
