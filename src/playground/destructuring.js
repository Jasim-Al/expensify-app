//--------------------------------------------------------------------------
//OBJECT DESTRUCTURING
//--------------------------------------------------------------------------

// const person = {
//     name:'JASIM AL MUBARACK',
//     age:18,
//     location: {
//         city:'MANANTHAVADY',
//         temp:29
//     }
// };

// const {name, age} = person ;
// const {city, temp: temperature } = person.location; 

// console.log(`${name} is ${age}.`);

// if (city && temperature) {
//     console.log(`It's ${temperature} celsius in ${city}`);
// }

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// }

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//--------------------------------------------------------------------------
//ARRAY DESTRUCTURING
//--------------------------------------------------------------------------

// const address = ['Edappara House Chungam','Thalappuzha','Kerala','670644'];
// const [,town,state] = address;

// console.log(`You are in ${town},${state}`);


const item = ['Coffee(ICED)','$3.00','$3.50','3.75'];
const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);