import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const POST_PER_PAGE = 2;
    const page = searchParams.get("page")
    try {
        // ? prisma find documents with pagination
        // const posts = await prisma.post.findMany({
        //     take: POST_PER_PAGE, // ? number of documents per page // per page document limit
        //     skip: POST_PER_PAGE * (page - 1),
        // });
        // ? prisma transaction method to perform multiple queries such as findMany & count
        const query = {
            take: POST_PER_PAGE,
            skip: POST_PER_PAGE * (page - 1),
        }
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count()
        ]);
        return new NextResponse(JSON.stringify(
            { posts, count },
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

// generating post data // alternative to prisma studio 
export async function POST(req) {
    try {
        const body = await req.json(); // Parse request body

        const newPost = await prisma.post.create({
            data: {
                title: body.title,
                slug: body.slug,
                desc: body.desc,
                img: body.img,
                views: 0,
                catSlug: body.catSlug,
                userEmail: body.userEmail,
            },
        });

        return new Response(JSON.stringify(newPost), { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
    }
}
