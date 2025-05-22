import { Button } from "@/components/ui/button";
import { PlusCircle, UserCircle, Ellipsis } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import prisma from "@/app/lib/db";


async function getData() {
    const data = await prisma.banner.findMany({
        orderBy: {
            createdAt: "desc",
        }
    })
    return data
 }

export default async function BannerRoute() {
   const data = await getData();
    return (
        <>
            <div className="flex items-center justify-end">
                <Button asChild className="flex gap-x-2">
                    <Link href="/dashboard/banner/create">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span> Add Banner </span>
                    </Link>
                </Button>
            </div>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Banners</CardTitle>
                    <CardDescription>Manage your banners</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead className="text-end">Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Image
                                        alt="Product Image"
                                        src={item.imageString}
                                        width={64}
                                        height={64}
                                        className="rounded-lg object-cover h-16 w-16"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    {item.title}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <Ellipsis className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                             <Link href={`/dashboard/banner/${item.id}/delete`}>Delete</Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}