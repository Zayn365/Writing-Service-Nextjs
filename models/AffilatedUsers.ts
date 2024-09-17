import { PrismaClient } from "@prisma/client";
// @ts-ignore
const prisma = new PrismaClient();

export async function get () {
    try {
        const clients = prisma.affilate_users.findMany();
         return clients;
    }
    catch(e:any) {
      console.log(e);
      return e.message
    }
}


export async function create(data: any) {
  try {
    const user = await prisma.affilate_users.create({
      data: data
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: any) {
  try {
    const user = await prisma.affilate_users.update({
      where: {
        id: id,
      },
      data: data
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function Delete(id: string) {
  try {
    // @ts-ignore
    await prisma.affilate_users.delete({
      where: {
        id: id,
      },
    });
    return { message: "Object deleted successfully" };
  } catch (error) {
    throw error;
  }
}