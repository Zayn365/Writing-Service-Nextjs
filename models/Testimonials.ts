import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
// @ts-ignore
const prisma = new PrismaClient();

export async function GetTestimonials () {
    try {
        const testimonials = prisma.testimonials.findMany();
         return testimonials;
    }
    catch(e:any) {
      console.log(e);
      return e.message
    }
}

export async function createTestimonials(data: any) {
  try {
    const user = await prisma.testimonials.create({
      data: data
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: any) {
    try {
      const user = await prisma.testimonials.update({
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
  
export async function deleteTestimonials(id: string) {
  try {
    // @ts-ignore
    await prisma.testimonials.delete({
      where: {
        id: id,
      },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw error;
  }
}