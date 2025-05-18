import { Button } from "@/components/ui/button";
import { PlusCircle, UserCircle, Ellipsis } from "lucide-react"
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader,TableHead,TableRow, TableBody,TableCell } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";


export default function BannerRoute() {
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
                            <TableRow>
                                <TableCell>
                                    <UserCircle className="h-16 w-16"/>
                                </TableCell>
                                <TableCell className="font-medium">
                                    Create Products
                                </TableCell>
                                <TableCell>
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
                                                    <Link href="#">Edit</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="#">Delete</Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}