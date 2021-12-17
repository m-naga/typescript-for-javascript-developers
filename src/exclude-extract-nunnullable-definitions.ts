export {};

type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FnctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type TypeExcludingFungtion = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;