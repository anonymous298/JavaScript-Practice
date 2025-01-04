// Loops In JavaScript

// for (let i = 1; i <= 10; i++) {
//     console.log('Hello World');
// }

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }

// console.log('sum =', sum);

// for (let i = 1; i <= 10; i++) {
//     console.log('i =', i);
// };

// let i = 20;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// }

// while (i <= 10);

// let i = 0;

// do {
//     console.log(i);
//     i++;
// }

// while (i <= 10);

// function EvenOddGenerator(number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 2 == 0) {
//             console.log('Number Is Odd', i);
//         }

//         else {
//             continue
//         }
//     }
// }

// EvenOddGenerator(10)

// for-of loop

// let name = 'talha';

// for (let words of name) {
//     console.log(words);
// }

// let str = 'ArtificialIntelligence';

// for (let words of str) {
//     console.log(words);
// }

// let personInfo = {
//     name : 'talha',
//     age : 17,
//     gender : 'male',
//     profession : 'Enterpreneur'
// };

// for (let key in personInfo) {
//     console.log(key, '-->', personInfo[key]);
// }

// let fruits = ['Apple', 'orange', 'kiwi', 'banana'];

// for (let i in fruits) {
//     console.log(i);
// }

// String

// let str = 'ArtificialIntelligence';

// console.log(str.length)
// console.log(str[0])

// let Info = {
//     name : 'talha',
//     age : 17,
//     gender : 'male'
// }

// console.log(`The person name is ${Info.name} he is ${Info.age} years old and he is ${Info.gender}`)

// console.log('Muhammad\nTalha');

// let str = 'Muhammad Talha';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// str = str.toUpperCase();

// console.log(str);

// let str = '     Muhammad Talha          ';

// console.log(str.trim());
// console.log(str);

// let str = 'Muhammad talha';

// console.log(str.replace('talha', 'owais'));
// console.log(str.slice(5,8));

let first = 'muhammad';
let last = 'talha';

console.log(first.concat(last));