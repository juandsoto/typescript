/**
 * NonNullable<T>
 * Exclude null and undefined from T
 * For this to work it is necessary to enable strict typescript mode in tsconfig.json
 * "strict": true -> Enable all strict type-checking options
 */

interface StarshipProps {
  color?: "blue" | "red" | "green";
}

function paintStarship(
  id: number,
  color: NonNullable<StarshipProps["color"]>
) {}

// Cannot define the color as undefined or null
// paintStarship(1, undefined);
paintStarship(1, "green");

export {};
