// khuchra poyshar akta array dewa thakbe, positive integer number
// ekhan theke ber korte hobe lowest khuchra poysha konta amra banate parbona

const changeArray = [5, 7, 1, 1, 2, 3, 22];

const nonConstructibleChange = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);

  let change = 0;

  for (let coin of sortedArr) {
    if (coin > change + 1) {
      return change + 1;
    }
    change += coin;
  }

  return change;
};

const result = nonConstructibleChange(changeArray);
console.log(result);
