"use client"
import { createBanner } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent,CardFooter, } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UploadDropzone } from "@/app/lib/uploadthing"
import { SubmitButton } from "@/app/components/SubmitButton";
import Image from "next/image";
import { useState } from "react";
import { useActionState } from "react";
import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import { bannerSchema } from "@/app/lib/zodSchemas";

export default function BannerRoute() {
    const [image, setImages] = useState<string | undefined>(undefined);
    const [lastResult, action] = useActionState(createBanner, undefined);

    const [form, fields] = useForm({
        lastResult,
        onValidate({formData}) {
            return parseWithZod(formData, { schema: bannerSchema }); 
        },

        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    })

    return (
        <form className="space-y-6" id={form.id} onSubmit={form.onSubmit} action={action}>
            
            <div className="flex items-center gap-x-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/dashboard/products">
                        <ChevronLeft className="w-4 h-4"/>
                    </Link>
                </Button>
                <h1 className="text-xl font-semibold tracking-tight">New Banner</h1>
            </div>
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Banner Details</CardTitle>
                    <CardDescription>Create your Banner right here</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input name={fields.title.name} key={fields.title.key} defaultValue={fields.title.initialValue} type="text" placeholder="enter banner name right here"/>
                            <p className="text-red-500">{fields.title.errors}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Image</Label>
                            <input
                                type="hidden"
                                value={image}
                                key={fields.imageString.key}
                                name={fields.imageString.name}
                                defaultValue={fields.imageString.initialValue}
                            />
                                {image !== undefined ? (
                                    <Image
                                    src={image}
                                    alt="Product Image"
                                    width={200}
                                    height={200}
                                    className="w-[200px] h-[200px] object-cover border rounded-lg"
                                    />
                                ) : (
                                    <UploadDropzone
                                    onClientUploadComplete={(res) => {
                                        setImages(res[0].url);
                                    }}
                                    onUploadError={() => {
                                        alert("Something went wrong");
                                    }}
                                    endpoint="bannerImageUplader"
                                    />
                                )}

                  <p className="text-red-500">{fields.imageString.errors}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton text="Create Banner"/>
                </CardFooter>
            </Card>
        </form>
    );
}
