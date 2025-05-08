import express from "express";
import { createTransaction } from "../controllers/paymentController";
const router = express.Router();

router.post("/", createTransaction);

export default router;
