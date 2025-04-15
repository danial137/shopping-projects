import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { DollarSign, ShoppingBag, Package, User2 } from "lucide-react";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
export default function Dashboard() {
    return(
        <>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Revrnue</CardTitle>
                    <DollarSign className="h-4 w-4 text-green-500"/>
                </CardHeader>

                <CardContent>
                    <p className="text-2xl font-bold">$100.000</p>
                    <p className="text-xs text-muted-foreground">Based on 100 Charges</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Sales</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-green-500"/>
                </CardHeader>

                <CardContent>
                    <p className="text-2xl font-bold">+50</p>
                    <p className="text-xs text-muted-foreground">Total Sales on Codepedia</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Products</CardTitle>
                    <Package className="h-4 w-4 text-green-500"/>
                </CardHeader>

                <CardContent>
                    <p className="text-2xl font-bold">37</p>
                    <p className="text-xs text-muted-foreground">Total Product created</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total User</CardTitle>
                    <User2 className="h-4 w-4 text-green-500"/>
                </CardHeader>

                <CardContent>
                    <p className="text-2xl font-bold">250</p>
                    <p className="text-xs text-muted-foreground">Total Users in our site</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-4 md:gap-8 grid-cols-2 mt-10">
            <Card>
                <CardHeader>
                <CardTitle>Transactions</CardTitle>
                <CardDescription>Recent transactions from your store</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Recant Sales</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden sm:flex h-9 w-9">
                            <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Mahdi Rezaii</p>
                            <p className="text-sm text-muted-foreground">mahdi@gmail.com</p>
                        </div>
                        <p className="ml-auto font-medium">$1,999.00</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden sm:flex h-9 w-9">
                            <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Mahdi Rezaii</p>
                            <p className="text-sm text-muted-foreground">mahdi@gmail.com</p>
                        </div>
                        <p className="ml-auto font-medium">$1,999.00</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden sm:flex h-9 w-9">
                            <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Mahdi Rezaii</p>
                            <p className="text-sm text-muted-foreground">mahdi@gmail.com</p>
                        </div>
                        <p className="ml-auto font-medium">$1,999.00</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden sm:flex h-9 w-9">
                            <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Mahdi Rezaii</p>
                            <p className="text-sm text-muted-foreground">mahdi@gmail.com</p>
                        </div>
                        <p className="ml-auto font-medium">$1,999.00</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden sm:flex h-9 w-9">
                            <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium">Mahdi Rezaii</p>
                            <p className="text-sm text-muted-foreground">mahdi@gmail.com</p>
                        </div>
                        <p className="ml-auto font-medium">$1,999.00</p>
                    </div>
                </CardContent>
            </Card>
        </div>
        </>
    )
}