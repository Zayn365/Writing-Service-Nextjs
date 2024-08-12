import { NextApiRequest, NextApiResponse } from "next";

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
