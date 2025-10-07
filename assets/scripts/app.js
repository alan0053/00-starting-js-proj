function combine(a, b, c) {
  if (a && b && c) {
    return (a * b) / c;
  } else {
    return "You need to provide three values";
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const user = new Person("Berkcan", 29);

let hobbies = ["Sports", "Cooking", "Traveling"];

hobbies.push("Reading");

const index = hobbies.findIndex((item) => item === "Cooking");

console.log(index);

const editedHobbies = hobbies.map((item) => item + "!!");
console.log(editedHobbies);

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects

  const numberObjects = numberArray.map((item) => ({ val: item }));
  return numberObjects;
}

const numberArray = [1, 2, 3, 4, 5];

const numberObjects = transformToObjects(numberArray);

console.log(numberObjects);

const [firstName, lastName] = ["Berkcan", "Alankoy"];
console.log(firstName, lastName);

const { name: userName, age } = {
  name: "Berkcan",
  age: 29,
  greet() {
    console.log("Hello!");
  },
};

console.log(userName, age);

const hobbies2 = ["Gaming", "Coding"];
const mergedHobbies = [...hobbies, ...hobbies2];
console.log(mergedHobbies);

const extendedPerson = {
  country: "Canada",
  ...user,
};
console.log(extendedPerson);

////

const user2 = { name: "Berkcan", age: 29, job: "Developer" };

for (const key in user) {
  console.log(key); // name, age, job
  console.log(user[key]); // Berkcan, 29, Developer
}

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit); // apple, banana, cherry
}

// array, string, Map, Set, veya NodeList gibi iterable (yineleyebilir) nesnelerde kullanılır.

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
