import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import * as Faqs from "../../../../models/Faqs"


export async function GET(req: NextRequest) {
   try{
    const data = await Faqs.get();
    return NextResponse.json(
        { message: "Operation Successfull" , data: data },
        {
          status: 200
        }
    )
   }catch(e:any){
         return NextResponse.json({
            message: "Operation Failed" , data: e.message
         },{
            status : 400
         })
   }

}


export async function POST(req: Request, res: NextApiResponse) {
  try {
    const data = await req.json();
    const user = await Faqs.create(data);
    return NextResponse.json({ message: "Operation Successfull" , data: user }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: any, res: NextApiResponse) {
  try {
    const url = new URL(req.url);
    const searchParam = new URLSearchParams(url.searchParams);
    const id = searchParam.get('id');
      const data = await req.json(); // Reading the request body
      const user = await Faqs.update(id as any, data); // Updating the user
      return NextResponse.json({ message: "Operation Successful", data: user }, { status: 201 });
  } catch (e: any) {
      // console.log(e);
      return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
  
export async function DELETE(req: any, res: NextApiResponse) {
    try {
      // console.log("Check1");
      const url = new URL(req.url);
      // console.log("Check2");
      const searchParam = new URLSearchParams(url.searchParams);
      // console.log("Check3");
      const id = searchParam.get('id');
      // console.log("Check4");
      const user = await Faqs.Delete(id as any);
      // console.log("Check5");
      return NextResponse.json({ message: "Operation Successfull" ,data: user }, { status: 201 });
    } catch (e: any) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  }