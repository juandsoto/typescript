/**
 * Readonly<T>
 * Makes all properties of a type readonly
 */

interface Starship {
  name: string;
  enableHyperJump: boolean;
}

let starship: Readonly<Starship> = {
  enableHyperJump: false,
  name: "guardian",
};

/**
 * Cannot redefine properties of starship 'cause they're readonly
 * starship.name = 'explorer'
 * starship.enableHyperJump = true;
 */

export {};
