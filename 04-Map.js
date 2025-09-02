console.log('--------Map Data Structure--------');

const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

for (const [key, val] of map) {
  console.log(`Key: ${key}, Value: ${val}`);
}

console.log('Size of map: ' + map.size);

console.log('Add an item to map');
map.set('d', 4);

for (const [key, val] of map) {
  console.log(`Key: ${key}, Value: ${val}`);
}

console.log('Check key is exist in map?');
console.log(map.has('e'));
console.log(map.has('d'));

console.log('Delete an item from map');
map.delete('d');
console.log(map.has('d'));

console.log('Get of map size: ' + map.size);

console.log('Delete all items from map');
map.clear();
console.log('Get of map size: ' + map.size);
