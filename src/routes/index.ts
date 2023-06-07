import { Router } from "express";

const route = Router();

route.get("/list", (req, res) => {res.send("Ola")});



export {route}