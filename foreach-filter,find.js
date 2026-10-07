// foreach-filter,find.js

// forEach type-1
const numbers = [1, 5, 4, 15]
const result = numbers.forEach(n => console.log(n))


// filter type used systeam

const filter1 = [45, 56, 40, 54, 71, 72];
const filter2 = [50, 80, 84, 87, 46, 71, 44];
const result1 = filter1.filter(n => n >= 45)
// console.log(result1)
const result2 = filter2.filter(n => n >= 60)
// console.log(result2)


const find1 = [50, 80, 84, 87, 46, 71, 44];
const resultFind = find1.find(n => n >= 80)

console.log(resultFind)
