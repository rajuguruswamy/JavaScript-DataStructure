const arr = [1, 2, 3, 'raju'];
console.log(arr[0]);

console.log('1.length of the initial Array', arr.length);
let len = arr.push(4); // Appends new elements to the end of an array, and returns the new length of the array
console.log('2.Length after push:', len);

len = arr.unshift(0); // insert element at the beginning of the array and returns the new length
console.log('3.Length after unshift:', len);

len = arr.pop(); // removes the last element from an array and returns the removed element
console.log('4.Length after pop:', len);

len = arr.shift(); // removes the first element from an array and returns the removed element
console.log('5.Length after shift:', len);

console.log('6. Iterating over array:');
for (const item of arr) {
  console.log(item);
}

//Array Methods :  map, filter , reduce, concat, slice, splice
// Array Big-O time complexity

//  1. insert/remove from end  - O(1)
//  2. insert/remove from beginning - O(n)
//  3. access by index - O(1)
//  4. search - O(n)
//  5. push/pop - O(1)
//  6. Shift/Unshift/concat/slice/splice - O(n)
//  7. forEach/map/filter/reduce - O(n)

console.log('7.Map function ');
//Creates a new array by applying a function to each element of the array.
const numbersArray1 = [1, 2, 3, 4];
const doubled = numbersArray1.map((num) => num * 2);
console.log('Doubled array:', doubled);

console.log('8.Get even numbers using Filter function ');
// Creates a new array containing only the elements that satisfy a condition.
const numbersArray2 = [1, 2, 3, 4, 5];
const evens = numbersArray2.filter((n) => n % 2 === 0);
console.log('Even numbers:', evens);

console.log('9.Reduce function');
// Reduces the array to a single value (sum, product, object, etc.).
const numbersArray3 = [1, 2, 3, 4];
const sum = numbersArray3.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log('Sum of numbers:', sum);

console.log('10.Concat function');
// Combines two or more arrays.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log('Combined array:', combinedArray);

console.log('11.Slice function');
// Returns a shallow copy of a portion of an array into a new array object.
// start → index where to begin
// end → index where to stop (not included)

const numbersArray5 = [10, 20, 30, 40, 50];
const sliced = numbersArray5.slice(1, 4); // [20,30,40]
console.log('Slice array:', sliced); // [20, 30, 40]

console.log('12. splice function');
//Modifies the original array by removing/replacing/adding elements.
const numbersArray6 = [10, 20, 30, 40, 50];
console.log('numbersArray6 before removal:', numbersArray6);
const removed = numbersArray6.splice(1, 2);
console.log(numbersArray6); // [10, 40, 50]

console.log('Modified array:', numbersArray6);
console.log('Removed elements:', removed);

// Add elements at index 1
numbersArray6.splice(1, 0, 25, 27);
console.log('Added elements:', numbersArray6);
