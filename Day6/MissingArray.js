function findMissingNumbers(arr1, arr2) {
  const set2 = new Set(arr2);
  const missingNumbers = arr1.filter(num => !set2.has(num));
  
  return missingNumbers;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6];

const missingNumbers = findMissingNumbers(array1, array2);
console.log(missingNumbers);
