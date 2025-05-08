import axios from "axios";

export const getBkashToken = async (): Promise<string> => {
  // implement token retrieval
  return "dummy-token";
};

export const initiateBkashPayment = async (
  amount: number,
  invoiceNo: string
): Promise<string> => {
  const token = await getBkashToken();
  const payment = await axios.post(
    "https://checkout.pay.bka.sh/v1.2.0-beta/payment/create",
    {
      amount,
      intent: "sale",
      merchantInvoiceNumber: invoiceNo,
    },
    {
      headers: { Authorization: token },
    }
  );
  return payment.data.bkashURL;
};
