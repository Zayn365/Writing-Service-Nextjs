import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import * as Client from "../../../../models/Clients"


export async function GET(req: NextRequest) {
   try{
    const data = await Client.GetClients();
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
    const user = await Client.createClients(data);
    return NextResponse.json({ user }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: Request, res: NextApiResponse, Request: NextApiRequest) {
    try {
        const {query: id} = Request
      const data = await req.json();
      const user = await Client.update(id as any, data);
      return NextResponse.json({ user }, { status: 201 });
    } catch (e: any) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  }

  
export async function DELETE(req: Request, res: NextApiResponse, Request: NextApiRequest) {
    try {
        const {query: id} = Request
      const data = await req.json();
      const user = await Client.deleteClients(id as any);
      return NextResponse.json({ user }, { status: 201 });
    } catch (e: any) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  }