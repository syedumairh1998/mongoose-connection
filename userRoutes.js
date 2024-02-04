import express from "express";
import { createUser } from "../controllers/UserController.js";
import { validateUserData } from "../middleware/validateData.js";

let router = express.Router();

router.post("/register", validateUserData("user registeration"), createUser);

export { router };
