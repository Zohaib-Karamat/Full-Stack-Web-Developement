import express from "express";
import { create, deleteById, getAllUser, getUserById, updateById } from "../controllers/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/getall", getAllUser);
route.get("/getone/:id", getUserById);
route.put("/update/:id", updateById);
route.delete("/delete/:id", deleteById);

export default route;
