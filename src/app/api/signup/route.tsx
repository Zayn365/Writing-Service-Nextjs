import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { signup, login, update, deleteUser } from "../../../../models/Users";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    { message: "Users" },
    {
      status: 200
    }
  );
}


export async function POST(req: Request, res: NextApiResponse) {
  try {
    const data = await req.json();

    const user = await signup(data);
    return NextResponse.json({ user }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
