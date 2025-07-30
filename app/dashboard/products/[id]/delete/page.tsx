import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { deleteProduct } from "@/app/actions"
import { SubmitButton } from "@/app/components/SubmitButton"

interface PageProps {
    params: {
        id: string;
    }
}

export default async function DeleteRoute({ params }: PageProps) {
    return (
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle>Are you absolutely sure?</CardTitle>
                    <CardDescription>
                        This action cannot be undone.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary" asChild>
                        <Link href="/dashboard/products">Cancel</Link> {/* fix typo: dasboard -> dashboard */}
                    </Button>
                    <form action={deleteProduct}>
                        <input type="hidden" name="productId" value={params.id} />
                        <SubmitButton text="Delete Product" variant="destructive" />
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
}
