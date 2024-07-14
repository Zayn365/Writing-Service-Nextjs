import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
// @ts-ignore
const prisma = new PrismaClient();

export async function GetOrders () {
    try {
        
        const orders = prisma.orders.findMany();
        console.log(orders);
        return orders;
    }
    catch(e:any) {
      console.log(e);
      return e.message
    }
}


export async function createOrders(data: any) {
  try {
    const user = await prisma.orders.create({
      data: data
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: any) {
  try {
    const user = await prisma.orders.update({
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

export async function deleteOrders(id: string) {
  try {
    // @ts-ignore
    await prisma.orders.delete({
      where: {
        id: id,
      },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw error;
  }
}