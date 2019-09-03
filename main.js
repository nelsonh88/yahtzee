// I am declaring variables
// I decided to go with an object instead of declaring variables seemed to be easier to adjust game scores
let upperSectionNumbers = {
    aces: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0
},
    upperSectionScoring = 0,
    // ^^^ declaring variables for top half of the scoring 

    threeOfAKind = 0,
    fourOfAKind = 0,
    fullHouse = false,
    smallStraight = false,
    largeStraight = false,
    chance = 0,
    yahtzee01 = false,
    yahtzee02 = false,
    yahtzee03 = false,
    lowerSectionScoring = 0,
    // ^^^ declaring variables for bottom half of the scoring

    totalScore = 0;
// ^^^ declaring vaiable for the entire game score 

// declaring a variable for the upper form so I can iterate through it
// let upperForm = document.getElementById("upper-section_scoring").elements;


// uppersection scoring  

const checkUpperSectionScoring = function () {
    // right here I am iterating through the uppertSectionNumbers object to check if it has the same properties as the id in the form
    for (numberValues in upperSectionNumbers) {
        if (Object.prototype.hasOwnProperty.call(upperSectionNumbers, numberValues)) {
            upperSectionNumbers[numberValues] = document.getElementById(numberValues).value;
            console.log(Object.prototype.hasOwnProperty.call(upperSectionNumbers, numberValues))
            console.log(numberValues)
        }
        addUpperSectionScoring();
    }
}
// const checkUpperSectionScoring = function  () {
//     for (let i = 0; i < upperForm.length; i++) {
//         let numberValues = upperForm[i].id
//         // console.log('this is the property in obj', Object.keys(objOfNumVariable))
//         if (numberValues === 'aces') {
//             aces = document.getElementById(numberValues).value;
//             console.log(aces)
//         } else if (numberValues === 'twos') {
//             twos = document.getElementById(numberValues).value;
//         } else if (numberValues === 'threes') {
//             threes = document.getElementById(numberValues).value;
//         } else if (numberValues === 'fours') {
//             fours = document.getElementById(numberValues).value;
//         } else if (numberValues === 'fives') {
//             fives = document.getElementById(numberValues).value;
//         } else if (numberValues === 'sixes') {
//             sixes = document.getElementById(numberValues).value;
//         };
//     }
//   addUpperSectionScoring();
// };

// fn is checking for bonus on the uppersection scorring 
// if your total score for the upper sction >= 63 then you get the bonus
const checkForBonus = function () {
    if (upperSectionScoring >= 63) {
        console.log('bonus!');
        upperSectionScoring = upperSectionScoring + 35;
        return upperSectionScoring;
    } else {
        console.log('no bonus');
    }
};

// const addUpperSectionScoring = function () {
//     upperSectionScoring = parseInt(aces) + parseInt(twos) + parseInt(threes) + parseInt(fours) + parseInt(fives) + parseInt(sixes);

//     console.log(upperSectionScoring);

//     checkForBonus();
// }

const addUpperSectionScoring = function () {
    // making a new array to store the values from the original array into number data type
    let arr2 = []
    // declaring a new variable that equals Object.values a method that brings back an array of the values in the key value pairs from the object upperSectionNumbers
    arr1 = Object.values(upperSectionNumbers)
    // looping through arr1 to see convert each element in the array into a number data type and then pushing the new value into the empty arr2 array
    for (let i = 0; i < arr1.length; i++) {
        let newValue = parseInt(arr1[i])
        arr2.push(newValue)
    }
    // using the reduce method to add the values of the array arr2 together which is the total score of the upper section without the bonus
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    upperSectionScoring = arr2.reduce(reducer)
    // calling the checkForBonus fn to check for the bonus
    checkForBonus();

}


// lowersection scoring

const checkThreeOfAKind = function () {
    threeOfAKind = document.getElementById("threeOfAKind").value;
    lowerSectionScoring = lowerSectionScoring + parseInt(threeOfAKind);
    console.log(threeOfAKind)
}

// const checkThreeOfAKind = function () {
//     if (document.getElementById("threeOfAKind").checked) {
//         threeOfAKind = true;
//         console.log(threeOfAKind);
//     } else {
//         console.log('No three of a kind')
//     }

// }

const checkFourOfAKind = function () {
    fourOfAKind = document.getElementById("fourOfAKind").value;
    lowerSectionScoring = lowerSectionScoring + parseInt(fourOfAKind);
    console.log(fourOfAKind)
}

// checks if a full house was scored if so then add it to the lower section scoring 
const checkForFullHouse = function () {
    if (document.getElementById("fullHouse").checked) {
        fullHouse = true;
        console.log('full house bonus!');
        lowerSectionScoring = lowerSectionScoring + 25
        console.log(lowerSectionScoring);
        return lowerSectionScoring;
    } else {
        console.log('No full house!')
        return lowerSectionScoring;
    }
};
// checkForFullHouse();
// console.log(lowerSectionScoring);

// checks if a small straight was scored if so then add 30 to the lower scoring
const checkForSmallStraight = function () {
    if (document.getElementById("smallStraight").checked) {
        smallStraight = true;
        console.log('small straight bonus!');
        lowerSectionScoring = lowerSectionScoring + 30
        console.log(lowerSectionScoring);
        return lowerSectionScoring;
    } else {
        console.log('No small straight!')
        return lowerSectionScoring;
    }
};

// checkForSmallStraight();

// checks for large straight if true then add 40
const checkForLargeStraight = function () {
    if ((document.getElementById("largeStraight").checked)) {
        largeStraight = true;
        console.log('large straight bonus!');
        lowerSectionScoring = lowerSectionScoring + 40
        console.log(lowerSectionScoring);
        return lowerSectionScoring;
    } else {
        console.log('No large straight!')
        return lowerSectionScoring;
    }
};

// checkForLargeStraight();
// console.log(lowerSectionScoring);

const checkForYahtzee = function (el) {
    if (el) {
        console.log(el)
        console.log('yahtzee!!');
        lowerSectionScoring = lowerSectionScoring + 50
        console.log(lowerSectionScoring);
        return lowerSectionScoring;
    } else {
        console.log('You basically lost')
        return lowerSectionScoring;
    }
};

// checkForYahtzee(yahtzee01);
// checkForYahtzee(yahtzee02);
// checkForYahtzee(yahtzee03);

const checkLowerSectionScoring = function () {
    console.log(lowerSectionScoring);
}


// console.log(totalScore);

const checkTotalScore = function () {
    totalScore = upperSectionScoring + lowerSectionScoring
    return totalScore
};

// checkTotalScore();
// console.log(totalScore);
