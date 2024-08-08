// pages/api/paypal/create-payment.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID as string;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET as string;

const PAYPAL_API = "https://api-m.paypal.com";

const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString(
  "base64"
);

export async function POST(req: Request, res: NextApiResponse) {
  try {
    let data = await req.json();
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: data.amount,
            },
            description: "Your description here",
          },
        ],
        application_context: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        },
      },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
      }
    );

    const approvalUrl = response.data.links.find(
      (link: any) => link.rel === "approve"
    ).href;
    console.log(approvalUrl);

    return NextResponse.json(
      { message: "Operation Successful", data: approvalUrl },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating PayPal payment:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
