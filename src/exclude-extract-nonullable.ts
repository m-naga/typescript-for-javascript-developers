export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 第一引数のUnion型から第二引数に型を指定して除外する
type FnctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFungtion = Exclude<SomeTypes, Function>;

// Union型から特定の型のみを取り出す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
// nullとundefinedをUnion型から除外する
type NonNullableTypes = NonNullable<NullableTypes>;