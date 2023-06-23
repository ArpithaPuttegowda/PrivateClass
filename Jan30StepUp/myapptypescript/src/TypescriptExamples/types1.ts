// Variable type annotations
export let message: string | number = "Hello, TypeScript!";
message = 10;
let count: number = 10;
let isDone: boolean = false;

// Function type annotation
function greet(name: string, loc: string): string {
  return `Hello, ${name}!`;
}

function fn(a: string | []): number {
  return a.length;
}
const f1 = (a: string): string => {
  return a;
};
fn("sachin");
console.log(greet("John", "mumbai")); // Output: Hello, John!
