import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuContent, DropdownMenuSeparator,DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PlusCircle, UserCircle, Ellipsis } from "lucide-react"
import prisma from "@/app/lib/db";
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const data = await prisma.product.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return data
}

export default async function ProductsRoute() {
    const data = await getData()
    return (
        <>
            <div className="flex items-center justify-end">
                < Button asChild className="flex items-center gap-x-2">
                    <Link href="/dashboard/products/create">
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>Add Product</span>
                    </Link>
                </Button >
            </div >
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>
                        Manage your ptoducts and view their sales performance
                    </CardDescription>

                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Image</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Statue</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="text-end">َActions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow key={item.id}>
                                    <TableCell>
                                        <Image alt="product Image" src={item.images[0]} width={64} height={64} className="rounded-md object-cover h-16 w-16"/>
                                    </TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>${item.price}</TableCell>
                                    <TableCell>{new Intl.DateTimeFormat("en-US").format(item.createdAt)}</TableCell>
                                    <TableCell className="text-end">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size="icon" variant="ghost">
                                                    <Ellipsis className="h-4 w-4"/>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator/>
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/dashboard/products/${item.id}`}>Edit</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/dashboard/products/${item.id}/delete`}>Delete</Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </CardHeader>
            </Card>
        </>
    )
}