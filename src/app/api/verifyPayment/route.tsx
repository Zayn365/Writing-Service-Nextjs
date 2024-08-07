// pages/api/paypal/execute-payment.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID as string;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET as string;

const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // Use sandbox for testing

const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString(
  "base64"
);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { paymentId, payerId } = req.body;

    const response = await axios.post(
      `${PAYPAL_API}/v1/payments/payment/${paymentId}/execute`,
      { payer_id: payerId },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Payment was successful, you can now call your placeOrder function or save the payment details to your database.
    // You might need to adapt this to your specific use case

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error executing PayPal payment:", error);
    res.status(500).json({ error: "Failed to execute payment" });
  }
}
