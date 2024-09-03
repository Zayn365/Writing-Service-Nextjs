import { NextApiRequest, NextApiResponse } from "next";
import { GetAll, update, deleteUser } from "../../../../models/Users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = await GetAll();
    return NextResponse.json(
      { message: "Operation Successfull", data: data },
      {
        status: 200,
      }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "Operation Failed",
        data: e.message,
      },
      {
        status: 400,
      }
    );
  }
}

export async function PUT(req: any, res: NextApiResponse) {
  try {
    const url = new URL(req.url);
    const searchParam = new URLSearchParams(url.searchParams);
    const id = searchParam.get('id');
      const data = await req.json(); // Reading the request body
      const user = await update(id as any, data); // Updating the user
      return NextResponse.json({ message: "Operation Successful", data: user }, { status: 201 });
  } catch (e: any) {
      // console.log(e);
      return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
  
export async function DELETE(req: any, res: NextApiResponse) {
    try {
      const url = new URL(req.url);
      const searchParam = new URLSearchParams(url.searchParams);
      const id = searchParam.get('id');
      const user = await deleteUser(id as any);
      return NextResponse.json({ message: "Operation Successfull" ,data: user }, { status: 201 });
    } catch (e: any) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  }
const routes = {
  "/api/user": {
    get: async (req: NextApiRequest, res: NextApiResponse) => {
      res.status(200).json({ message: "Hello from GET /api/user" });
    },

    post: async (req: NextApiRequest, res: NextApiResponse) => {
      res.status(201).json({ message: "Hello from POST /api/user" });
    },
  },

  "/api/user/login": {
    post: async (req: NextApiRequest, res: NextApiResponse) => {
      res.status(200).json({ message: "Hello from POST /api/user/login" });
    },
  },

  "/api/user/logout": {
    post: async (req: NextApiRequest, res: NextApiResponse) => {
      res.status(200).json({ message: "Hello from POST /api/user/logout" });
    },
  },
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method, url } = req;
//   const route = routes[url];

//   if (!route) {
//     return res.status(404).json({ error: "Not found" });
//   }

//   if (!route[method.toLowerCase()]) {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     await route[method.toLowerCase()](req, res);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
