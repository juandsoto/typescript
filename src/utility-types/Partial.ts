/**
 * Partial<T>
 * Makes all properties of a type optional
 */
interface Starship {
  name: string;
  enableHyperJump: boolean;
}

const updateStarShip = (id: number, starship: Partial<Starship>) => {
  //DO SOMETHING
};

updateStarShip(1, {
  name: "Explorer",
  // it is not necessary to define all properties
});

export {};
