
// const user = { id: 1, name: 'Gorib amir', job: 'actor' };

// // javaScript object Natation (json);

// const stringiField = JSON.stringify(user);
// console.log(user)
// console.log(stringiField)





// type-2 stringify

const shop = {
    // string
    Owner: 'Alia',

    // Object
    address: {
        street: 'kocukhat',
        city: 'dhaka uttor',
        country: 'BD',
    },

    // array 
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

// Object from stringify
console.log(shop)
const shopJson = JSON.stringify(shop);
console.log(shopJson)

// stringify from object translate
const parseJson = JSON.parse(shopJson)
console.log(parseJson)
