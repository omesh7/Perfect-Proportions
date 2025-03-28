"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { calculateIngredients, type ChapatiIngredients, type FlourType } from "@/lib/calculator"
import { Utensils } from "lucide-react"

export default function CalculatorPage() {
  const [count, setCount] = useState<number>(4)
  const [flourType, setFlourType] = useState<FlourType>("atta")
  const [ingredients, setIngredients] = useState<ChapatiIngredients | null>(null)

  const handleCalculate = () => {
    const result = calculateIngredients(count, flourType)
    setIngredients(result)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center gap-2 text-3xl font-bold">
          <Utensils className="h-8 w-8" />
          <h1>Chapati Calculator</h1>
        </div>

        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Calculate Ingredients</CardTitle>
            <CardDescription>Enter the number of chapatis you want to make and select your flour type.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="chapati-count">Number of Chapatis</Label>
                <Input
                  id="chapati-count"
                  type="number"
                  min={1}
                  value={count}
                  onChange={(e) => setCount(Number.parseInt(e.target.value) || 1)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Flour Type</Label>
                <RadioGroup
                  value={flourType}
                  onValueChange={(value) => setFlourType(value as FlourType)}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="atta" id="atta" />
                    <Label htmlFor="atta">Atta Flour</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whole-wheat" id="whole-wheat" />
                    <Label htmlFor="whole-wheat">Whole Wheat</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all-purpose" id="all-purpose" />
                    <Label htmlFor="all-purpose">All-Purpose</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multigrain" id="multigrain" />
                    <Label htmlFor="multigrain">Multigrain</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button onClick={handleCalculate} className="w-full">
                Calculate Ingredients
              </Button>

              {ingredients && (
                <>
                  <Separator className="my-4" />

                  <div className="rounded-lg border p-4">
                    <h3 className="mb-4 text-lg font-medium">Ingredients for {count} Chapatis</h3>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Flour ({flourType.replace("-", " ")})</h4>
                        <p>
                          {ingredients.flour.grams} grams ({ingredients.flour.cups} cups)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Water</h4>
                        <p>
                          {ingredients.water.ml} ml ({ingredients.water.cups} cups)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Salt</h4>
                        <p>
                          {ingredients.salt.grams} grams ({ingredients.salt.teaspoons} tsp)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Oil (optional)</h4>
                        <p>
                          {ingredients.oil.ml} ml ({ingredients.oil.tablespoons} tbsp)
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-muted-foreground">
                      <p>
                        * Measurements are approximate and may need slight adjustments based on flour quality and
                        humidity.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

