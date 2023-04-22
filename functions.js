// Capitalize
function capitalize(string) {
    return string.toUpperCase();
}

// Reverse String
function reverseString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    return reversedString;
}

// Calculator object
const calculator = {
    add(n1, n2) {
        return n1 + n2;
    },
    subtract(n1, n2) {
        return n1 - n2;
    },
    divide(n1, n2) {
        return n1 / n2;
    },
    multiply(n1, n2) {
        return n1 * n2;
    },
};

// Ceasar Cipher
function caesarCipher(string, key) {
    
    const shiftedString = [];

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for (let i = 0; i < string.length; i++) {
        shiftedString.push(swap(string[i], key, alphabet));
    }

    return shiftedString.join('');
}

function swap(letter, key, alphabet) {
    if (letter === ' ') {
        return ' '
    } else if (letter === letter.toUpperCase()) {

        for (let i = 0; i < alphabet.length; i++) {

            if (letter === alphabet[i]) {
                if (i + key >= alphabet.length) {
                    let position = (i + key) - alphabet.length;
                    return alphabet[position];
                }

                return alphabet[i + key].toUpperCase();
            }

        } 
    } else {
        for (let i = 0; i < alphabet.length; i++) {

            if (letter === alphabet[i]) {
                if (i + key >= alphabet.length) {
                    let position = (i + key) - alphabet.length;
                    return alphabet[position];
                }

                return alphabet[i + key];
            }

        } 

    }
}

// Analyze Array
function analyzeArray(numbers) {
    let totalSum = 0;
    let average;
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        totalSum += numbers[i];

        if (numbers[i] < min) min = numbers[i];
        if (numbers[i] > max) max = numbers[i];
    }

    average = totalSum / numbers.length;

    return {
        average,
        min,
        max,
        length: numbers.length
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };