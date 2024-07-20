// 2 ta array dewa thakbe
// check korte hobe je akta array arekta array er subsequent kina
// jeta check kora hocche shetar shob element main array er moddhe thakte hobe
// sequence ta thik thakte hobe

const mainArray = [5, 1, 22, 25, 6, -1, 8, 10];
const subArray = [1, 6, -1, 10];

const validateSubsequent = (arr, arrToCheck) => {
  let currentSubArrayIndex = 0;
  let currentMainArrayIndex = 0;

  while (currentMainArrayIndex < mainArray.length) {
    if (arr[currentMainArrayIndex] !== arrToCheck[currentSubArrayIndex]) {
      currentMainArrayIndex += 1;
    } else if (
      arr[currentMainArrayIndex] === arrToCheck[currentSubArrayIndex]
    ) {
      currentMainArrayIndex += 1;
      currentSubArrayIndex += 1;
    }

    if (currentSubArrayIndex === arrToCheck.length) {
      return true;
    }
  }

  return false;
};

const result = validateSubsequent(mainArray, subArray);
console.log(result);
