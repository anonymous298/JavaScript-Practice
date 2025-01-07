// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// function randomNumberGuesser() {
//     const gameNumber = 37;

//     while (true) {
//         let userNumber = prompt('Enter A Number: ');

//         if (userNumber > gameNumber) {
//             console.log('Guess is higher');
//         }

//         else if (userNumber < gameNumber) {
//             console.log('Guess is lower');
//         }

//         else {
//             console.log('Congratulations! You Guessed it right.');
//             break;
//         }
//     }
// } 

// randomNumberGuesser()

// function nameToUsername() {
//     let name = prompt('Enter Your Name: ');
    
//     let preWord = '@';
//     let postWord = name.length;

//     let username = preWord + name + postWord;

//     return username;
// }

// let username = nameToUsername();
// console.log(`Your username is: ${username}`);

function entry() {
    let age = prompt('Enter Your Age: ');

    if (age > 18) {
        let confirmation = prompt('Did you want to enter: ');

        if (age === 'yes') {
            console.log('You are welcome here');
        }

        else {
            console.log('No problem');
        }
    }

    else {
        console.log('Your age does not satisfy our terms');
    }
};

entry();