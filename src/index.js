module.exports = function toReadable(number) {
    const lessThanTwenty = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tens = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const numerals = String(number).split("");

    // Number is less than a twenty
    if (number < 20) {
        return lessThanTwenty[number];
    }
    // Number is less than one hundred and is a multiple of ten
    if (number < 100 && number % 10 === 0) {
        return tens[number];
    }
    // Number is less than one hundred and not a multiple of ten
    if (number < 100 && number % 10 !== 0) {
        return `${tens[+numerals[0] * 10]} ${lessThanTwenty[+numerals[1]]}`;
    }
    // Number is a multiple of one hundred
    if (number % 100 === 0) {
        return `${lessThanTwenty[number / 100]} hundred`;
    }
    // Number is a multiple of ten
    if (number % 10 === 0) {
        return `${lessThanTwenty[+numerals[0]]} hundred ${
            tens[+numerals[1] * 10]
        }`;
    }
    // Number is over a hundred
    if (String(number).slice(1) < 20) {
        return `${lessThanTwenty[+numerals[0]]} hundred ${
            lessThanTwenty[+numerals.slice(1).join("")]
        }`;
    } else {
        return `${lessThanTwenty[+numerals[0]]} hundred ${
            tens[+numerals[1] * 10]
        } ${lessThanTwenty[+numerals[2]]}`;
    }
};
