import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
// @ts-ignore
const prisma = new PrismaClient();

export async function GetClients () {
    try {
        const clients = prisma.clients.findMany();
         return clients;
    }
    catch(e:any) {
      console.log(e);
      return e.message
    }
}


export async function createClients(data: any) {
  try {
    const user = await prisma.clients.create({
      data: data
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: any) {
  try {
    const user = await prisma.clients.update({
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

export async function deleteClients(id: string) {
  try {
    // @ts-ignore
    await prisma.clients.delete({
      where: {
        id: id,
      },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw error;
  }
}