import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../route";

const prisma = new PrismaClient();

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    await main();
    const posts = await prisma.post.findFirst({ where: { id } });
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    const { title, content } = await req.json();

    await main();

    const post = await prisma.post.update({
      data: { title, content },
      where: { id },
    });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];

    await main();

    const post = await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
