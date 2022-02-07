/**
 * Exclude<T, U>
 * Allows us to substract one Union type U, from another one T
 */
type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";

let JohnsDrink: AvailableDrinks;
JohnsDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
/**
 * Cannot do this
 * JanesDrink = 'Coffee'
 */
JanesDrink = "Tea";

console.table({ order: { JohnsDrink, JanesDrink } });

export {};
