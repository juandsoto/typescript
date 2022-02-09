type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  const someOtherFunction = (someArg: T extends boolean ? "Type A" : T extends string ? "Type B" : T extends number ? "Type C" : "Type D") => {
    const a: "Type A" | "Type B" | "Type C" | "Type D" = someArg;
  };
  return someOtherFunction;
}

someFunction(true)("Type A");
someFunction("hola")("Type B");
someFunction(5)("Type C");
someFunction({})("Type D");

type StringOrNot<T> = T extends string ? string : never;
type AUnion = string | boolean | never;
//type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<"a" | "b" | "c", "a" | "b">;
// 'a' extends 'a' | 'b' ? never : 'a' => never
// 'b' extends 'a' | 'b' ? never : 'b' => never
// 'c' extends 'a' | 'b' ? never : 'c' => 'c'

type MyType<T> = T extends [string | number] ? T : never;
type MyResult = MyType<[string]>;
