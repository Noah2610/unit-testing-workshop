const express = require("express");

const server = express();

server.post("/new", (req, res) => {});

server.get("/get/:name", (req, res) => {});

server.listen("localhost", 8080);