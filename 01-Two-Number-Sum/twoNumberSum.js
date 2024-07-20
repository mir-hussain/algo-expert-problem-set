// Akta array thakbe, ar atka target thakbe
// Check kore dekhte hobe je oi array er moddhe amon kono pair ache kina
// jetar sum oi target er shoman hobe

const numberArray = [3, 5, -4, 8, 11, 1, -1, 6, 4];
const targetSum = 10;

// solution 1 - two loop O(n^2) Time | O(1) space

const twoNumberSum1 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};

const pairs = twoNumberSum1(numberArray, targetSum);
console.log(pairs);
