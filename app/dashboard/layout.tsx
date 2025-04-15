import { ReactNode } from "react";
import DashboardNavigation from "../components/dashboard/DashboardNavigation"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { auth, currentUser } from '@clerk/nextjs/server'
import { MenuIcon, CircleUser } from "lucide-react"
import { redirect } from "next/navigation";

import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    SignOutButton
} from '@clerk/nextjs'
export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const { userId } = await auth()

    if (!userId) {
        return redirect("/");
    }

    const user = await currentUser()

    return (
        <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
                <nav className="hidden font-medium md:flex md:flex-row md:gap-5 md:text-sm lg:gap-6">
                    <DashboardNavigation />
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="shrink-0 md:hidden" variant="outline">
                            <MenuIcon className='h-5 w-5' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="flex flex-col gap-6 text-lg font-medium">
                            <DashboardNavigation />
                        </nav>
                    </SheetContent>
                </Sheet>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="w-5 h-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <ClerkProvider>
                        <DropdownMenuLabel>{user?.firstName}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <SignOutButton>Log out</SignOutButton>
                            </DropdownMenuItem>
                        </ClerkProvider>

                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="my-5">
                {children}
            </main>
        </div>
    )
}