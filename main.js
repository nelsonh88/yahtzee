// I am declaring variables

let aces = 0, 
twos = 0,
threes = 0,
fours = 0,
fives = 0,
sixes = 0,
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
let upperForm = document.getElementById("upper-section_scoring").elements;


// uppersection scoring  
const checkUpperSectionScoring = function  () {
    for (let i = 0; i < upperForm.length; i++) {
        let numberValues = upperForm[i].id
        // console.log('this is the property in obj', Object.keys(objOfNumVariable))
        if (numberValues === 'aces') {
            aces = document.getElementById(numberValues).value;
            console.log(aces)
        } else if (numberValues === 'twos') {
            twos = document.getElementById(numberValues).value;
        } else if (numberValues === 'threes') {
            threes = document.getElementById(numberValues).value;
        } else if (numberValues === 'fours') {
            fours = document.getElementById(numberValues).value;
        } else if (numberValues === 'fives') {
            fives = document.getElementById(numberValues).value;
        } else if (numberValues === 'sixes') {
            sixes = document.getElementById(numberValues).value;
        };
    }
  addUpperSectionScoring();
};
// checkUpperSectionScoring();

// console.log(aces)
// console.log(twos)
// console.log(threes)
// console.log(fours)
// console.log(fives)
// console.log(sixes)

// fn is checking for bonus on the uppersection scorring 
// if your total score for the upper sction >= 63 then you get the bonus
const checkForBonus = function () {
    console.log('this is the upper scroing', upperSectionScoring);
    if (upperSectionScoring >= 63) {
        console.log('bonus!');
        upperSectionScoring = upperSectionScoring + 35;
        console.log(upperSectionScoring);
        upperSectionScoring = upperSectionScoring;
        return upperSectionScoring;
    } else {
        console.log('no bonus');
        upperSectionScoring = upperSectionScoring;
        return upperSectionScoring;
    }
};

const addUpperSectionScoring = function () {
    upperSectionScoring = parseInt(aces) + parseInt(twos) + parseInt(threes) + parseInt(fours) + parseInt(fives) + parseInt(sixes);

    console.log(upperSectionScoring);

    checkForBonus();
}

// checkForBonus();
// console.log('this is the new upper section score', upperSectionScoring);

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


console.log(totalScore);

const checkTotalScore = function () {
    totalScore = upperSectionScoring + lowerSectionScoring
    return totalScore
}; 

checkTotalScore();
console.log(totalScore);

// get elements from html form and set them as variables

console.log(aces)
console.log(upperSectionScoring)
