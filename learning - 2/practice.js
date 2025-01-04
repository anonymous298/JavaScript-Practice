// function practice1() {
//     let number = prompt('Enter A Number: ')

//     if (number % 5 === 0) {
//         return true;
//     }

//     else {
//         return false;
//     }
// }

// let result = practice1();
// console.log(result);

function gradeGiver(score) {
    if (score >= 0 && score <= 49) {
        return 'F';  // Give F grade to students
    }

    else if (score >= 50 && score <= 59) {
        return 'D';   // Give D grade to students
    }

    else if (score >= 60 && score <= 69) {
        return 'C';   // Give C grade to students
    }

    else if (score >= 70 && score <= 89) {
        return 'B';   // Give B grade to students
    }

    else {
        return 'A';   // Give A grade to students
    }

}

let score = 90;

let grade = gradeGiver(score);
console.log(grade)