import { add, subtract } from "./index.js";
let successCount = 0;

// Test cases for addition
for (const testCase of [
  { input: [1, 2], expected: 3 },
  { input: [5, 7], expected: 12 },
  { input: [10, 20], expected: 30 },
  { input: [-1, -2], expected: -3 },
]) {
  const result = add(...testCase.input);
  if (result !== testCase.expected) {
    throw new Error(`Test failed for addition with input ${testCase.input}: expected ${testCase.expected}, got ${result}`);
  } else {
    successCount++;
  }
}

// Test cases for subtraction
for (const testCase of [
  { input: [5, 3], expected: 2 },
  { input: [10, 5], expected: 5 },
  { input: [0, 1], expected: -1 },
  { input: [-5, -5], expected: 0 },
]) {
  const result = subtract(...testCase.input);
  if (result !== testCase.expected) {
    throw new Error(`Test failed for subtraction with input ${testCase.input}: expected ${testCase.expected}, got ${result}`);
  } else {
    successCount++;
  }
}

console.log(`Successfully passed ${successCount} test cases.`);