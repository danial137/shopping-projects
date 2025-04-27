import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function DeleteRoute() {
    return(
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle>Are you absolutely sure</CardTitle>
                    <CardDescription>
                        this action can not be undone
                    </CardDescription>
                </CardHeader>
                 <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary" asChild>
                        <Link href="/dasboard/products">Cancel</Link>
                        </Button>
                    <Button variant="destructive">Confirm</Button>
                 </CardFooter>
            </Card>
        </div>
    )
}