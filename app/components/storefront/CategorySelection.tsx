import Image from "next/image";
import Link from "next/link";
import all from "@/public/vercel.svg"
import men from "@/public/vercel.svg"
import women from "@/public/vercel.svg"

export function CategoriesSelection() {
    return (
        <div className="py-24 sm:py-32">
            <div className="flex justify-between itens-center">
                <h2 className="text-2xl font-extrabold tracking-tight">
                    Shop by Category
                </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
                    <Image
                        src={all}
                        alt="All Products Image"
                        className="object-cover object-center "
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/all">
                            <h3 className="text-white font-semibold">All Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}