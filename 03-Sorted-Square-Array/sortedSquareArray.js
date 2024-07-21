// Akta array dewa thakbe, otar square ber korte hobe
// Square korar pore je array ta hobe sheta sorted hote hobe

const mainArray = [-7, -5, -4, 3, 6, 8, 9];

//* Solution 1 | O(nlogn) Time | O(n) Space

// const sortedSquareArray1 = (arr) => {
//   const squaredArray = arr.map((item) => Math.pow(item, 2));
//   return squaredArray.sort((a, b) => a - b);
// };

// const result = sortedSquareArray1(mainArray);
// console.log(result);

//* Solution 2 | O(n) Time | O(n) Space

const sortedSquareArray2 = (arr) => {
  const sqrArray = [];

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (Math.abs(arr[leftIndex]) > Math.abs(arr[rightIndex])) {
      sqrArray[i] = Math.pow(arr[leftIndex], 2);
      leftIndex += 1;
    } else {
      sqrArray[i] = Math.pow(arr[rightIndex], 2);
      rightIndex -= 1;
    }
  }

  return sqrArray;
};

const result = sortedSquareArray2(mainArray);
console.log(result);
