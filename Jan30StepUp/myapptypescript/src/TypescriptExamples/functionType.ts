export function fn(a: () => void): void {
  a();
}

function callback() {
  return 10;
}
fn(callback);

let stores: (string | number)[];
stores = ["1", 2, "134"];

let store: Array<number | string | []>;
store = ["1", 2, "134", []];

let arr: [string, number];
arr = ["sachin", 123];
