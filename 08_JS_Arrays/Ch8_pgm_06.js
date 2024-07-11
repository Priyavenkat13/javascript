// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");
items.push("Marina Beach");
items[1] = " Taj Mahal";
items.push("Machu Picchu", "Christ the Redeemer");
console.log(items.join(" and "));

console.log(items.join(" and "));

console.log(items);
console.log(items.join(" and "));
removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));



/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */