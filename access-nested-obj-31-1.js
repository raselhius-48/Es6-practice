
// access data

const student = [{ id: 1, name: 'Rasel', address: 'khilkhat', }]

// console.log(student[0].address)


// type:-2 object in array or nested object access

const product = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 6500 },
        { id: 2, name: 'lenovo laptop', price: 16000 },

    ]
}
// console.log(product.data);
// console.log(product.data[1]);
// console.log(product.data[1].price);


// type:-3  object in nested array access system 

const user = {
    id: 5001,
    name: 'soriful raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            thitd: 'no dorai'
        },
        city: 'dhaka',
    }
}
// console.log(user)

// console.log(user.address)
// console.log(user.address.street)
// console.log(user.address.street.second)


//  map discouse

// // type 1
// const numbers = [4, 5, 2, 8, 10];
// const doubled = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double)
// }
// // console.log(doubled)


// // type-2
// const numbers = [4, 5, 2, 8, 10];

// function doubleIt(num) {
//     console.log('num Now', num)
//     return num * 2;
// }
// const result = numbers.map(doubleIt)

// // console.log(result)


// // type 3 short function in work

// const numbers = [12, 10, 8, 15, 7];
// const doubled3 = numbers.map(num => num * 2)
// // console.log(doubled3)

// const fiveBonus = numbers.map(num => num + 5)
// console.log(fiveBonus)

// type 4

// const friends = ['tom', 'john', 'mivheal', 'oliver'];
// const lengths = friends.map(friend => friend.length)
// console.log(lengths)


// const friends = ['tom', 'john', 'mivheal', 'oliver'];
// const fristLetter = friends.map(fistle => fistle[0])
// console.log(fristLetter)




