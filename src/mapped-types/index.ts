type Properties = "propA" | "propB";
type MyMappedTypes = {
  [P in Properties]: boolean;
};

const mapped: MyMappedTypes = {
  propA: false,
  propB: true,
};
/**
 *
 */
type MyMappedType2<Properties extends string | number | symbol> = {
  [P in Properties]: P;
};
type MyNewtype2 = MyMappedType2<"propA" | "propB">;
/**
 *
 */
type MyMappedType3<T> = {
  readonly [P in keyof T]: T[P] | null;
};
type MyNewtype3 = MyMappedType3<{ a: "a"; b: "b" }>;
/**
 *
 */
type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};
type MyNewtype4 = Pick1<{ a: "az"; b: "bz" }, "a">;

/**
 * type Record<K extends keyof any, T> = {
 *	[P in K]: T;
 *	};
 */
type Record1<K extends keyof any, T> = {
  [P in K]: T;
} & { someProperty: number };

let someRecord: Record1<string | number, number> = { someProperty: 24 };
someRecord.apples = 10;
someRecord.oranges = 4;
someRecord[1] = 1;

interface Record2 {
  [key: string]: number;
}
let someRecord2: Record2 = {};
someRecord.apples = 10;
someRecord.oranges = 4;
