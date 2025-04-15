import { PrismaClient, Prisma } from '@prisma/client'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation"

const prisma = new PrismaClient()
export async function GET() {
    const user = await currentUser()

    if (!user || user === null || !user.id){
        throw new Error("Somethind went wrong")
    }

    let dbUser = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    });

    if (!dbUser) {
        dbUser = await prisma.user.create({
        data:{
            id: user.id,
            firstName: user.firstName ?? "",
            lastName: user.lastName ?? "",
            email: user.emailAddresses[0].emailAddress ?? "",
            profileImage: user.imageUrl ?? ""
            },
        })
    }
    return redirect("http://localhost:3000/dashboard")
}