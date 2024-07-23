import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
// @ts-ignore
const prisma = new PrismaClient();

export async function signup(data: any) {
  try {
    // return data;
    const userCheck = await prisma.users.findUnique({
        where: {
          email: data.email,
        },
      });
      if (userCheck) {
        throw new Error("Same Email Cannot be Used Twice!");
      }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const user = await prisma.users.create({
        // @ts-ignore
      data: {
        ...data,
        password: hashedPassword,
        v: 0
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function login(data:any) {
  try {
    // @ts-ignore
    const user = await prisma.users.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    const isValid = await bcrypt.compare(data.password, user.password as any);
    if (!isValid) {
      throw new Error("Invalid password");
    }
    return user;
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: any) {
  try {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.password, salt);
      data.password = hashedPassword;
    }
    // @ts-ignore
    const user = await prisma.users.update({
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

export async function deleteUser(id: string) {
  try {
    // @ts-ignore
    await prisma.users.delete({
      where: {
        id: id,
      },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    throw error;
  }
}