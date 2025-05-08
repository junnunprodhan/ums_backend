import { Request, Response } from "express";
import PaymentTransaction from "../models/paymentTransaction.model";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const payment = await PaymentTransaction.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
