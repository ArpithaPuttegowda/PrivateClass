// export let value: any;

// value = 123;
// // No type checking required
// let num: number = value;
// console.log(num);

// value = "Hello";
// // No type checking required
// let str: string = value;
// console.log(str);

export let value: unknown;

value = 123;
// To use the value, type assertion or type checking is required
if (typeof value === "number") {
  let num: number = value;
  num.toExponential();
  console.log(num);
}

value = undefined;
if (typeof value === "string") {
  let str: string = value;
  console.log(str);
}
