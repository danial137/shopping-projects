import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UploadDropzone } from "../../../lib/uploadthing"
import Image from "next/image";

export default function BannerRoute() {
    return (
        <form className="space-y-6">
            
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
                            <Input type="text" placeholder="enter banner name right here"/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Image</Label>
                            <UploadDropzone endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            // Do something with the response
                                            console.log("Files: ", res);
                                            alert("Upload Completed");
                                        }}
                                        onUploadError={(error: Error) => {
                                            // Do something with the error.
                                            alert(`ERROR! ${error.message}`);
                                        }}
                                    />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
}
