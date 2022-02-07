/**
 * Omit<T, K>
 * The opposite to Pick
 */
interface Starship {
  name: string;
  enableHyperJump: boolean;
}

type OmitStarshipName = Omit<Starship, "name">;

const omitStarshipName: OmitStarshipName = {
  enableHyperJump: true,
};

console.log(omitStarshipName);

export {};
