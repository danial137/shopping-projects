import prisma from "@/app/lib/db"
import { notFound } from "next/navigation"
import { EditForm } from "@/app/components/dashboard/EditForm"; 
 
async function getData (productId: string) {
    const data = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });

    if(!data) {
        return notFound();
    }

    return data
}

export type Params = Promise<{ id: string }>;

export default async function EditRoute(props: {params: Params }) {
    const { id } = await props.params
    const data = await getData(id);
    return (
        <EditForm data={data}/>
    )
}