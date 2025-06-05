"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, X } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { UploadDropzone } from "@uploadthing/react"
import { useActionState } from "react";
import { editProduct } from "@/app/actions"
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { productSchema } from "@/app/lib/zodSchemas"
import { useState } from 'react'
import { categories } from "@/app/lib/categories"
import { SubmitButton } from "@/app/components/SubmitButton"
import Image from "next/image"
import { type $Enums } from "@prisma/client"

interface iAppProps {
    data: {
        id: string;
        name: string;
        description: string;
        status: $Enums.ProductStatus;
        price: number;
        images: string[];
        category: $Enums.Category;
        isFeatured: boolean;
    }
}

export function EditForm({ data }: iAppProps){
    const [images, setImages] = useState<string[]>(data.images)
    const [lastResult, action] = useActionState(editProduct, undefined)
    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: productSchema })
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    })

    const handleDelete = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    }
    return (
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
            <input type="hidden" name="productId" value={data.id}/>
            <div className="flex items-center gap-4">
                <Button variant="outline" asChild>
                    <Link href="/dashboard/products">
                        <ChevronLeft className="w-4 h-4" />
                    </Link>
                </Button>
                <h1 className="text-xl font-semibold tracking-tight">Edit Product</h1>
            </div>
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Product Detail</CardTitle>
                    <CardDescription>
                        you can Edit this product
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input key={fields.name.key} name={fields.name.name} defaultValue={data.name} type="text" className="w-full" placeholder="Product Name" />
                            <p className="text-red-500">{fields.name.errors}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Description</Label>
                            <Textarea key={fields.description.key} name={fields.description.name} defaultValue={data.description} className="w-full" placeholder="Product Description" />

                            <p className="text-red-500">{fields.description.errors}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Price</Label>
                            <Input key={fields.price.key} name={fields.price.name} defaultValue={data.price} type="number" className="w-full" placeholder="$55" />
                            <p className="text-red-500">{fields.price.errors}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Featured Product</Label>
                            <Switch key={fields.isFeatured.key} name={fields.isFeatured.name} checked={data.isFeatured}/>
                            <p className="text-red-500">{fields.isFeatured.errors}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Status</Label>
                            <Select key={fields.status.key} name={fields.status.name} defaultValue={data.status}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='draft'>Draft</SelectItem>
                                    <SelectItem value='published'>Published</SelectItem>
                                    <SelectItem value='archived'>Archived</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-red-500">{fields.status.errors}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Category</Label>
                            <Select key={fields.category.key} name={fields.category.name} defaultValue={data.category}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.name}>
                                            {category.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Images of Product</Label>
                            <input type="hidden" value={images} key={fields.images.key} name={fields.images.name} defaultValue={fields.images.initialValue as any} />
                            {
                                images.length > 0 ? (
                                    <div className="flex gap-5">
                                        {images.map((image, index) => (
                                            <div key={index} className="relative w-[100px] h-[100px]">
                                                <Image src={image} height={100} width={100} alt="product Image" className="w-full h-full object-cover rounded-lg border" />
                                                <button onClick={() => handleDelete(index)} type="button" className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-full text-white">
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                        <UploadDropzone endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            setImages(res.map((r) => r.url))
                                        }}
                                        onUploadError={(error: Error) => {
                                            // Do something with the error.
                                            alert(`ERROR! ${error.message}`);
                                        }}
                                    />
                                )
                            }
                            <p className="text-red-500">{fields.images.errors}</p>
                        </div>

                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton text="Edit Product" />
                </CardFooter>
            </Card>
        </form>
    )
}