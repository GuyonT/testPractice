function capitalize(string) {
  let firstCharUpper = string[0].toUpperCase();
  return firstCharUpper + string.slice(1);
}
test("capitalize", () => {
  expect(capitalize("patate")).toBe("Patate");
});
//

function reverseString(string) {
  return string.split("").reverse().join("");
}
test("reverse a string", () => {
  expect(reverseString("patate")).toBe("etatap");
});

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
test("add", () => {
  expect(add(1, 2)).toBe(3);
});
test("substract", () => {
  expect(substract(1, 2)).toBe(-1);
});
test("multiply", () => {
  expect(multiply(1, 2)).toBe(2);
});
test("divide", () => {
  expect(divide(1, 2)).toBe(0.5);
});

function caesarCipher(string, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = alphabet.split("");
  let shiftedAlphabetArray = [
    ...alphabetArray.slice(shift),
    ...alphabetArray.slice(0, shift),
  ];

  return string
    .split("")
    .map((char) => {
      const isUpperCase = char === char.toUpperCase();
      const lowerChar = char.toLowerCase();

      let charIndex = alphabetArray.indexOf(lowerChar);
      if (charIndex === -1) {
        return char;
      }

      let shiftedChar = shiftedAlphabetArray[charIndex];
      return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    })
    .join("");
}

test("caesarCipher", () => {
  expect(caesarCipher("patate", 1)).toBe("qbubuf");
  expect(caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
  expect(caesarCipher("Z", 1)).toBe("A");
  expect(caesarCipher("Xyz", 3)).toBe("Abc");
});

function arrayAnalysis(array) {
  return {
    average: array.reduce((acc, val) => acc + val, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
test("arrayAnalysis", () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
