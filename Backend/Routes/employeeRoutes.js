import express from "express";
import { createEmployee } from "../Controllers/employeeControls.js";

const router=express.Router();

router.post('/create',createEmployee);


export default router;