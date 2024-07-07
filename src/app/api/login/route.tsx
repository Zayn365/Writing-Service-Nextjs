import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { signup, login, update, deleteUser } from "../../../../models/Users";
import nc from 'next-connect';

// Notice the function definition:
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { message: "Users" },
    {
      status: 200
    }
  );
}

// Notice the function definition:
export async function POST(req: Request, res: NextApiResponse) {
  try {
    const data = await req.json();
    // return NextResponse.json(data);
    const user = await login(data);
    return NextResponse.json({ user }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
