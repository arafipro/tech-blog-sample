import { connect, disconnect } from "@/utils/db";
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
export const runtime = "edge";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await connect();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, content } = await req.json();
    await connect();
    const post = await prisma.post.create({
      data: { title, content },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await disconnect();
  }
};
