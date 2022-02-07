/**
 * ReturnType<T>
 * Obtain the return type of a function type
 */

interface StarshipProps {
  color?: "blue" | "red" | "green";
}

function paintStarship(id: number, color: NonNullable<StarshipProps["color"]>) {
  return {
    id,
    color,
  };
}

type PaintStarshipReturn = ReturnType<typeof paintStarship>;

const freturn: PaintStarshipReturn = paintStarship(1, "green");

console.log(freturn);

export {};
