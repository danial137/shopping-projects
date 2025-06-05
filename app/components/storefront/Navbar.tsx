import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedOut,
    UserProfile,
    SignOutButton
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MenuIcon, CircleUser } from "lucide-react"


export async function Navbar() {
    const user = await currentUser()
    return (
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-center">
            <div className="flex items-center">
                <Link href="/"></Link>
                    <h1 className="text-black font-bold text-xl lg:text-3xl">
                        Shoe<span className="text-primary">DEV</span>
                    </h1>
                <NavbarLinks/>
            </div>
            <div className="flex items-center">
            <ClerkProvider>
                {user ? (
                    <>
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
                    </>
                ) : (
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
                        <Button variant="ghost" asChild>
                            <SignInButton>Sign In</SignInButton>
                        </Button>
                        
                    </div>
                )}
             </ClerkProvider>
            </div>
        </nav>
    );
}

// function NavbarItems({ className }: { className?: string }) {
   
//     return (
//         <div
//             className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//         >
//             <Menu setActive={setActive}>
//                 <MenuItem setActive={setActive} active={active} item="Services">
//                     <div className="flex flex-col space-y-4 text-sm">
//                         <HoveredLink href="/web-dev">Web Development</HoveredLink>
//                         <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//                         <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//                         <HoveredLink href="/branding">Branding</HoveredLink>
//                     </div>
//                 </MenuItem>
//                 <MenuItem setActive={setActive} active={active} item="Products">
//                     <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//                         <ProductItem
//                             title="Algochurn"
//                             href="https://algochurn.com"
//                             src="https://assets.aceternity.com/demos/algochurn.webp"
//                             description="Prepare for tech interviews like never before."
//                         />
//                         <ProductItem
//                             title="Tailwind Master Kit"
//                             href="https://tailwindmasterkit.com"
//                             src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//                             description="Production ready Tailwind css components for your next project"
//                         />
//                         <ProductItem
//                             title="Moonbeam"
//                             href="https://gomoonbeam.com"
//                             src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//                             description="Never write from scratch again. Go from idea to blog in minutes."
//                         />
//                         <ProductItem
//                             title="Rogue"
//                             href="https://userogue.com"
//                             src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//                             description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//                         />
//                     </div>
//                 </MenuItem>
//                 <MenuItem setActive={setActive} active={active} item="Pricing">
//                     <div className="flex flex-col space-y-4 text-sm">
//                         <HoveredLink href="/hobby">Hobby</HoveredLink>
//                         <HoveredLink href="/individual">Individual</HoveredLink>
//                         <HoveredLink href="/team">Team</HoveredLink>
//                         <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//                     </div>
//                 </MenuItem>
//             </Menu>
//         </div>
//     );
// }
