import mongoose from "mongoose";

const paymentTransactionSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  method: { type: String },
  amount: { type: Number },
  txn_id: { type: String },
  status: { type: String },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model("PaymentTransaction", paymentTransactionSchema);
