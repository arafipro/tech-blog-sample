import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connect() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("DB接続失敗");
  }
}

export async function disconnect() {
  await prisma.$disconnect();
}
