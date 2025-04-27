"use server"

import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";
import { parseWithZod } from '@conform-to/zod'
import { productSchema } from "./lib/zodSchemas"
import prisma from "./lib/db"

export async function createProduct (prevState:unknown, formData: FormData) {
    const user = await currentUser()
    
    if (!user || user.emailAddresses[0].emailAddress !== 'danial79fakhrabadi@gmail.com') {
        return redirect("/");
    }
   
   const submission = parseWithZod(formData, {
    schema: productSchema,
   })

   if (submission.status !== "success") {
    return submission.reply();
   }

   const flatenUrls = submission.value.images.flatMap((urlString) => urlString.split(",").map((url) => url.trim()))

   await prisma.product.create({
        data: {
            name : submission.value.name,
            description : submission.value.description,
            status : submission.value.status,
            price : submission.value.price,
            images : flatenUrls,
            category : submission.value.category,
            isFeatured : submission.value.isFeatured,
        },
   });

   redirect("/dashboard/products");
}

export async function editProduct(prevState:any, formData: FormData) {
    const user = await currentUser()

    if (!user || user.emailAddresses[0].emailAddress !== 'danial79fakhrabadi@gmail.com') {
        return redirect("/");
    }

    const submission = parseWithZod(formData, {
        schema: productSchema,
    })

    if (submission.status !== "success") {
        return submission.reply();
    }

    const flatenUrls = submission.value.images.flatMap((urlString) => urlString.split(",").map((url) => url.trim()))

    const productId = formData.get("productId") as string
    await prisma.product.update({
        where: {
            id: productId,
        },
        data: {
            name: submission.value.name,
            description: submission.value.description,
            category: submission.value.category,
            price: submission.value.price,
            isFeatured: submission.value.isFeatured,
            status: submission.value.status,
            images: flatenUrls,
        }
    })

    redirect("/dashboard/products");
}

export async function deleteProduct(formData: FormData) {
    const user = await currentUser()

    if (!user || user.emailAddresses[0].emailAddress !== 'danial79fakhrabadi@gmail.com') {
        return redirect("/");
    }

    await prisma.product.delete({
        where: {
            id: formData.get('productId') as string
        }
    })

    redirect("/dashboard/products")
}