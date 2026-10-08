const products = [
    { id: 1, name: 'lenovo', price: 6500 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'mac', price: 150000 },
]

// map
const names = products.map(pro => pro.name)
console.log(names)
