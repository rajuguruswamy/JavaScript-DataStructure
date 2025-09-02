console.log('---------Set Data Structure------------------');
const set = new Set([1, 2, 3, 4, 5]);

console.log('iterate the set');

for (const item of set) {
  console.log(item);
}

console.log('---Added an item to set----');
set.add(6);

console.log('iterate the set after add 6');

for (const item of set) {
  console.log(item);
}

console.log('is Item exists in set?');
console.log(set.has(6));
console.log(set.has(7));

console.log('Delete an item from set');
set.delete(6);
console.log(set.has(6));

console.log('get of set size: ' + set.size);

console.log('delete all items from set');
set.clear();
console.log('get of set size: ' + set.size);
