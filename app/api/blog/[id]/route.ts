import { connect, disconnect } from "@/utils/db";
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
export const runtime = "edge";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    await connect();
    const post = await prisma.post.findFirst({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    const { title, content } = await req.json();
    await connect();
    const post = await prisma.post.update({
      data: { title, content },
      where: { id },
    });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: string = req.url.split("/blog/")[1];
    await connect();
    const post = await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await disconnect();
  }
};
