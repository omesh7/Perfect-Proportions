import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Utensils } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-8 py-12">
        <div className="flex items-center gap-2 text-4xl font-bold">
          <Utensils className="h-10 w-10" />
          <h1>Chapati Calculator</h1>
        </div>

        <p className="max-w-2xl text-center text-lg text-muted-foreground">
          Welcome to the Chapati Calculator - your go-to tool for perfectly measured chapati ingredients every time.
        </p>

        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Easy Ingredient Measurements</CardTitle>
            <CardDescription>Get precise measurements for your chapatis with just a few clicks.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Making chapatis at home should be simple and consistent. Our calculator helps you:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Calculate exact ingredient quantities based on how many chapatis you need</li>
                <li>Get measurements in both grams and cups for convenience</li>
                <li>Adjust recipes based on different flour types</li>
                <li>Save time and reduce waste with precise measurements</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/calculator">Try the Calculator</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

