import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { signup, login, update, deleteUser } from "../../../../models/Users";
import NextCors from 'nextjs-cors';

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
  //   await NextCors(req as any, res, {
  //     // Options
  //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  //     origin: '*',
  //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  //  });
    const data = await req.json();
    // return NextResponse.json(data);
    const user = await signup(data);
    return NextResponse.json({ user }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// Notice the function definition:
// export async function LOGIN(req: NextRequest, res: NextResponse) {
//   try {
//     const { email, password } = req.body as any;
//     const user = await login(email, password);
//     return NextResponse.json({ user }, { status: 200 });
//   } catch (e: any) {
//     return NextResponse.json({ error: e.message }, { status: 401 });
//   }
// }

// Notice the function definition:
// export async function UPDATE(req: NextRequest, res: NextResponse) {
//   try {
//     const id = req.query.id;
//     const data = req.body;
//     const user = await update(id, data);
//     return NextResponse.json({ user }, { status: 200 });
//   } catch (e: any) {
//     return NextResponse.json({ error: e.message }, { status: 500 });
//   }
// }

// Notice the function definition:
// export async function DELETE(req: NextRequest, res: NextResponse) {
//   try {
//     const id = req.body;
//     const result = await deleteUser(id);
//     return NextResponse.json(result, { status: 200 });
//   } catch (e: any) {
//     return NextResponse.json({ error: e.message }, { status: 500 });
//   }
// }