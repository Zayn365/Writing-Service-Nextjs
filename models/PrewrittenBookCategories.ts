import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
// @ts-ignore
const prisma = new PrismaClient();

export async function get() {
    try {
        const data = prisma.prewritten_book_categories.findMany();
         return data;
    }
    catch(e:any) {
      console.log(e);
      return e.message
    }
}


export async function create(data: any) {
  try {
    const user = await prisma.prewritten_book_categories.create({
      data: data
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: any) {
  try {
    const user = await prisma.prewritten_book_categories.update({
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
    await prisma.prewritten_book_categories.delete({
      where: {
        id: id,
      },
    });
    return { message: "Object deleted successfully" };
  } catch (error) {
    throw error;
  }
}