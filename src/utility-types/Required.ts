/**
 * Required<T>
 * Makes all properties of a type required
 */
interface Starship {
  name: string;
  enableHyperJump?: boolean;
}

const updateStarShip = (id: number, starship: Required<Starship>) => {
  //DO SOMETHING
};

updateStarShip(1, {
  name: "Explorer",
  // enableHyperJump must be defined
  enableHyperJump: true,
});

export {};
