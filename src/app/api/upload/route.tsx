import type { NextApiRequest, NextApiResponse } from 'next';
import upload from '../../../utils/Upload'; // Adjust path as necessary
import { NextResponse } from 'next/server';
import { IncomingMessage, ServerResponse } from 'http';

// Function to handle file upload with multer
const handleUpload = (req: IncomingMessage, res: ServerResponse) => {
  return new Promise<NextResponse>((resolve) => {
    upload.single('file')(req as any, res as any, (err: any) => {
      if (err) {
        console.error('Multer error:', err);
        // Handle specific multer errors, such as file size limit exceeded
        if (err.code === 'LIMIT_FILE_SIZE') {
          resolve(NextResponse.json({ error: 'File size exceeds the 20MB limit' }, { status: 413 }));
        } else {
          resolve(NextResponse.json({ error: 'Error uploading file' }, { status: 500 }));
        }
      } else if (!(req as any).body) {
        resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
      } else {
        resolve(NextResponse.json({ message: 'File uploaded successfully', file: (req as any).body }, { status: 200 }));
      }
    });
  });
};

// API route handler
export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const d = await req.json() as any;
    console.log(d);
    const response = await handleUpload(req as unknown as IncomingMessage, res as unknown as ServerResponse);
    return response;
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Unknown error uploading file' }, { status: 500 });
  }
};



// import nc from "next-connect";
// // import onError from "../../../common/errormiddleware";
// import multer from "multer";
// import path from "path";
// import { NextResponse } from "next/server";
// import { executeQuery } from "../../../config/db";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export const handler = nc();

// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public");
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// let upload = multer({
//   storage: storage,
// });
// function POST 
// let uploadFile = upload.single("file");
// handler.use(uploadFile);
// handler.post(async (req, res) => {
//   console.log("req.file", req);
//   console.log("req.body", req);
//   let url = "http://" + req.headers.host;
//   let filename = req;
// //   let result = await executeQuery("insert into upload(pic) values(?)", [
// //     filename,
// //   ]);
// //   result = await executeQuery(
// //     `select * from upload where pic_id=${result.insertId}`
// //   );
// return NextResponse.json({ message: 'uploaded file' },{ status: 500 });
// });

// // export default handler;