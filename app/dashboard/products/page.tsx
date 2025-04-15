import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuContent, DropdownMenuSeparator,DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PlusCircle, UserCircle, Ellipsis } from "lucide-react"
import Link from "next/link";

export default function ProductsRoute() {
    return (
        <>
            <div className="flex items-center justify-end">
                <Button asChild className="flex items-center gap-x-2">
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
                                <TableRow>
                                    <TableCell>
                                        <UserCircle className="h-6 w-6"/>
                                    </TableCell>
                                    <TableCell>Nike air</TableCell>
                                    <TableCell>Active</TableCell>
                                    <TableCell>$299.99</TableCell>
                                    <TableCell>15/06/2024</TableCell>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </CardHeader>
            </Card>
        </>
    )
}