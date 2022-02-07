/**
 * Pick<T, K>
 * Allows us to create a type from another type, defining what properties to pick
 */
interface Starship {
  name: string;
  enableHyperJump: boolean;
}

type StarshipNameOnly = Pick<Starship, "name">;

const starshipName: StarshipNameOnly = {
  name: "explorer",
};

console.log(starshipName);

export {};
