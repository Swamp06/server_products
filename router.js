import { Router } from "express"
import CarController from "./CarController.js"

const router = new Router()


router.get("/cars" , CarController.getCars )
router.post("/addcar" , CarController.addCar)
router.get("/car/:id" , CarController.getCar )
router.patch("/updatecar/:id" , CarController.patchCar)
router.delete("/deletecar/:id" , CarController.deleteCar)


export default router;