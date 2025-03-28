export type FlourType = "whole-wheat" | "all-purpose" | "atta" | "multigrain"

export interface ChapatiIngredients {
  flour: {
    grams: number
    cups: number
  }
  water: {
    ml: number
    cups: number
  }
  salt: {
    grams: number
    teaspoons: number
  }
  oil: {
    ml: number
    tablespoons: number
  }
}

// Conversion factors
const CONVERSIONS = {
  // Grams per cup for different flour types
  cupsToGrams: {
    "whole-wheat": 120,
    "all-purpose": 125,
    atta: 130,
    multigrain: 115,
  },
  // ml per cup
  mlPerCup: 236.59,
  // grams per teaspoon of salt
  gramsPerTeaspoonSalt: 5.9,
  // ml per tablespoon of oil
  mlPerTablespoonOil: 14.8,
}

// Base recipe for 4 chapatis
const BASE_RECIPE = {
  flour: {
    grams: 100,
  },
  water: {
    ml: 60,
  },
  salt: {
    grams: 1,
  },
  oil: {
    ml: 5,
  },
}

export function calculateIngredients(count: number, flourType: FlourType): ChapatiIngredients {
  // Calculate scaling factor based on desired count
  const scalingFactor = count / 4

  // Calculate ingredients in base units
  const flourGrams = BASE_RECIPE.flour.grams * scalingFactor
  const waterMl = BASE_RECIPE.water.ml * scalingFactor
  const saltGrams = BASE_RECIPE.salt.grams * scalingFactor
  const oilMl = BASE_RECIPE.oil.ml * scalingFactor

  // Convert to secondary units
  const flourCups = flourGrams / CONVERSIONS.cupsToGrams[flourType]
  const waterCups = waterMl / CONVERSIONS.mlPerCup
  const saltTeaspoons = saltGrams / CONVERSIONS.gramsPerTeaspoonSalt
  const oilTablespoons = oilMl / CONVERSIONS.mlPerTablespoonOil

  return {
    flour: {
      grams: Math.round(flourGrams),
      cups: Number.parseFloat(flourCups.toFixed(2)),
    },
    water: {
      ml: Math.round(waterMl),
      cups: Number.parseFloat(waterCups.toFixed(2)),
    },
    salt: {
      grams: Number.parseFloat(saltGrams.toFixed(1)),
      teaspoons: Number.parseFloat(saltTeaspoons.toFixed(2)),
    },
    oil: {
      ml: Math.round(oilMl),
      tablespoons: Number.parseFloat(oilTablespoons.toFixed(2)),
    },
  }
}

