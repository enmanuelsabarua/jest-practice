import { capitalize, reverseString, calculator, caesarCipher, analyzeArray  } from "./functions.js";

test('Capitalize a string', () => {
    expect(capitalize('hello world')).toBe('HELLO WORLD');
});

test('Reverse a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Add, subtract, divide and multiply two numbers', () => {
    expect(calculator.add(4, 2)).toBe(6);
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.multiply(4, 2)).toBe(8);
});

test('Caesar Cipher', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('Analyze an array', () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      };
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(object);
});