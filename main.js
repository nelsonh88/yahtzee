// I am declaring variables

let aces = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let threeOfAKind = 0;
let fourOfAKind = 0;
let fullHouse = false;
let smallStraight = false;
let largeStraight = false;
let chance = 0;
let yahtzee01 = false;
let yahtzee02 = false;
let yahtzee03 = false;
// declaring variable for top half of the scoring 
let upperSectionScoring = 0;
// declaring variable for bottom half of the scoring 
let lowerSectionScoring = 0;
// declaring vaiable for the entire game score 
let totalScore = 0;

// uppersection scoring 

const checkAces = function () {
    aces = document.getElementById("ones").value;
    console.log(aces)
}
const checkTwos = function () {
    twos = document.getElementById("twos").value;
    console.log(twos)
}
const checkThrees = function () {
    threes = document.getElementById("threes").value;
    console.log(threes)
}
const checkFours = function () {
    fours = document.getElementById("fours").value;
    console.log(fours)
}
const checkFives = function () {
    fives = document.getElementById("fives").value;
    console.log(fives)
}
const checkSixes = function () {
    sixes = document.getElementById("sixes").value;
    console.log(sixes)
}

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

const checkUpperSectionScoring = function () {
    upperSectionScoring = parseInt(aces) + parseInt(twos) + parseInt(threes) + parseInt(fours) + parseInt(fives) + parseInt(sixes);
    checkForBonus();
    console.log(upperSectionScoring);
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
