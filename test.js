import { add, subtract } from "./index.js";
let successCount = 0;

// Test cases for addition
for (const testCase of [
  { input: [1, 2], expected: 3 },
  { input: [5, 7], expected: 12 },
  { input: [10, 20], expected: 30 },
]) {
  const result = add(...testCase.input);
  if (result !== testCase.expected) {
    throw new Error(`Test failed for addition with input ${testCase.input}: expected ${testCase.expected}, got ${result}`);
  } else {
    successCount++;
  }
}

console.log(`Successfully passed ${successCount} test cases.`);