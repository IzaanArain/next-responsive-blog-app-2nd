import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

// GET SINGLE POST
export const GET = async (req, { params }) => {
    const { slug } = await params;
    try {
        // const post = await prisma.post.findUnique({
        //     where: { slug },
        //     include: { user: true },
        // });
        const post = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(
            post,
            { status: 200 }
        ));
    } catch (error) {
        console.error(error)
        return new NextResponse(JSON.stringify(
            { message: "Something went wrong!" },
            { status: 500 }
        ));
    }
}
