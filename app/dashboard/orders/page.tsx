import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody,TableCell } from "@/components/ui/table";
export default function OrderPage() {
    return (
        <Card>
            <CardHeader className="px-7">
                <CardTitle>Orders</CardTitle>
                <CardDescription>Recent order from your store</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                   <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader> 
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <p className="font-meduim">mahdi Rezaii</p>
                                <p className="hidden md:flex text-sm text-muted-foreground">mahdi@gmail.com</p>
                            </TableCell>
                            <TableCell>
                                Sale
                            </TableCell>
                            <TableCell>
                                Successfull
                            </TableCell>
                            <TableCell>
                                2025-03-03
                            </TableCell>
                            <TableCell className="text-right">
                                $250.00
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}