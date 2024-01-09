import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.join(process.cwd(),"./public/uploads"));
    },
    filename: (req:any, file, callback) => {
      req.originalName = Date.now() + "-" + file.originalname;
      callback(null, req.originalName);
    },
  }),
});



export async function POST(req: any, res: any) {
  try {
    console.log(path.join(process.cwd(),"./public/uploads"))
    const formData = await req.formData();
    const files :any= formData.getAll('files') as File[];
    console.log(files);
    upload.single(files[0])
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}
