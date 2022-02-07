/**
 * Record<K, T>
 * It is like Map data structure
 */
interface Starship {
  name: string;
  enableHyperJump: boolean;
}

const aRecord: Record<string, number> = {
  "green-apple": 10,
  oranges: 5,
};

const starships: Record<number, Starship> = {
  0: { name: "explorer", enableHyperJump: false },
  1: { name: "guardian", enableHyperJump: true },
};

console.log(aRecord["green-apple"]);
console.log({ starships });
console.log(starships[1].name);

export {};
