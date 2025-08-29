const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
  sayMyname: function () {
    console.log('My name is ' + this.name);
  },
};

console.log('1. Simple Object\n', obj);
console.log(obj.name); // Accessing property using dot notation
console.log(obj['age']); // Accessing property using bracket notation
console.log(obj['city']); // Accessing property using bracket notation

console.log('2. add attribute to object');
obj.country = 'USA';
console.log('Updated Object:', obj);

console.log('3. Delete attribute from object');
delete obj.age;
console.log('Object after deletion of age attribute:', obj);

console.log('4.Invoking method sayMyname:');
obj.sayMyname();

//  Object methods
// Object.keys() - returns an array of a given object's own enumerable property names
console.log('5. Object.keys():', Object.keys(obj));

// Object.values() - returns an array of a given object's own enumerable property values
console.log('6. Object.values():', Object.values(obj));

// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log('7. Object.entries():', Object.entries(obj));

// Object.assign() - copies all enumerable own properties from one or more source objects to a target object
const newObj = Object.assign({}, obj);
console.log('8. Object.assign():', newObj);

//  selected attributes
const selectedAttributes = (({ name, city }) => ({ name, city }))(obj);
console.log('9. Selected Attributes:', selectedAttributes);

// Object.freeze() - freezes an object. A frozen object can no longer be changed
const frozenObj = Object.freeze(obj);

// Big O time complexity
//  Insert  - O(1)
//  Remove  - O(1)
//  Access  - O(1)
//  Search  - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)
// Object.assign() - O(n)
// Object.freeze() - O(1)
