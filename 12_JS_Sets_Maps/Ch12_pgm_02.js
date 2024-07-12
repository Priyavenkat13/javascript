
// Find a union b
// Find a intersection b
// Find a with b    

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];
const union = new Set([a]);
console.log('Union-', Array.from(union));
const intersection = new Set(a.filter(num => b.includes(num)));
console.log('Intersection-', Array.from(intersection));
const difference = new Set(a.filter(num => !b.includes(num)));
console.log('Difference (a - b)-', Array.from(difference));
