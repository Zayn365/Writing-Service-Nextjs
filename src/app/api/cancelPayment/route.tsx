// pages/api/cancel.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params },
  res: NextApiResponse
) {
  const query = req;
  console.log(query);
  //   try {
  //     // if (!token || typeof token !== "string") {
  //     //   return res.status(400).json({ error: "Token is required" });
  //     // }

  //     return NextResponse.json(
  //       { message: "Operation Successful", data: token },
  //       { status: 201 }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     return NextResponse.json(
  //       { message: "Operation Failed", data: error },
  //       { status: 500 }
  //     );
  //   }
}
