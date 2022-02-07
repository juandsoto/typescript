/**
 * Extract<T, U>
 * Extract from T those types that are assignable to U
 */
type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";

let JohnsDrink: AvailableDrinks;
JohnsDrink = "Coffee";

type DrinksJaneLikes = "Tea" | "Lemonade" | "Mohito";
let JanesDrink: Extract<AvailableDrinks, DrinksJaneLikes>;

// JanesDrink = "Mohito";
JanesDrink = "Lemonade";

console.table({ order: { JohnsDrink, JanesDrink } });

export {};
