interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

let john: Person = {
  name: "John",
  age: 25,
};

greet(john); // Output: Hello, John! You are 25 years old.
