// import upload from '../../../utils/Upload'; // Adjust path as necessary
import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
// import { IncomingMessage, ServerResponse } from 'http';

// Function to handle file upload with multer
// const handleUpload = (req: IncomingMessage, res: ServerResponse) => {
//   return new Promise<NextResponse>((resolve) => {
//     upload.single('file')(req as any, res as any, (err: any) => {
//       if (err) {
//         console.error('Multer error:', err);
//         // Handle specific multer errors, such as file size limit exceeded
//         if (err.code === 'LIMIT_FILE_SIZE') {
//           resolve(NextResponse.json({ error: 'File size exceeds the 20MB limit' }, { status: 413 }));
//         } else {
//           resolve(NextResponse.json({ error: 'Error uploading file' }, { status: 500 }));
//         }
//       } else if (!(req as any).body) {
//         resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
//       } else {
//         resolve(NextResponse.json({ message: 'File uploaded successfully', file: (req as any).body }, { status: 200 }));
//       }
//     });
//   });
// };

// API route handler
export const POST = async (req: NextRequest) => {
  try {
    // Parse form data
    const formData = await req.formData();
    console.log();
    const file:any = formData.get('file');

    // Check if file exists in the form data
    // if (!file || !(file instanceof File)) {
    //   return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    // }

    // Define the upload directory
    const uploadDir = path.resolve('./public/upload');

    // Create the directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Create a unique filename to avoid overwriting existing files
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Write the file to the upload directory
    fs.writeFileSync(filePath, buffer);

    // Generate a URL path to access the file
    const fileUrlPath = `/upload/${filename}`;

    return NextResponse.json({ message: 'File uploaded successfully', filePath: fileUrlPath }, { status: 200 });
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
// export function POST () {
//   let uploadFile = upload.single("file");
//   handler.use(uploadFile);
//   handler.post(async (req, res) => {
//     console.log("req.file", req);
//     console.log("req.body", req);
//     let url = "http://" + req.headers.host;
//     let filename = req;
//   //   let result = await executeQuery("insert into upload(pic) values(?)", [
//   //     filename,
//   //   ]);
//   //   result = await executeQuery(
//   //     `select * from upload where pic_id=${result.insertId}`
//   //   );
//   return NextResponse.json({ message: 'uploaded file' },{ status: 500 });
//   });
  
// }

// // export default handler;