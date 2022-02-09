type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<"I am a string">;

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred2 = InferSomething2<{ a: { someAProp: 1 }; b: { someBProp: "B" } }>;

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyFuncReturnValue = ReturnType<() => true>;

export {};
