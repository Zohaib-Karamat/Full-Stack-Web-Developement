
import express from "express"
import { create, deleteById, getAllProducts, getProductById, updateById } from "../controller/productController.js"



const route = express.Router()

route.post("/product",create)
route.get("/getall",getAllProducts)
route.get("/getone/:id",getProductById)
route.put("/update/:id",updateById)
route.delete("/delete/:id",deleteById)  


export default route;
