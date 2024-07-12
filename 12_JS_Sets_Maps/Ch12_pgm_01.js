
const emptySet = new Set();
console.log('Empty Set:', emptySet);
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
}
console.log('Set containing numbers 0 to 10:', numberSet);

numberSet.delete(5); 
console.log('Set after removing 5:', numberSet);

numberSet.clear();
console.log('Set after clearing:', numberSet);
const stringArray = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const stringSet = new Set(stringArray);
console.log('Set of 5 string elements:', stringSet);
const countries = ['Finland', 'Sweden', 'Norway'];
const countryMap = new Map();
for (const country of countries) {
    countryMap.set(country, country.length);
}
console.log('Map of countries and number of characters:');
for (const [country, length] of countryMap) {
    console.log(`${country}: ${length}`);
}

// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country