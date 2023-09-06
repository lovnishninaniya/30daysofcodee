function findCommonElements(array1, array2) {
  const commonElements = [];

  for (const element1 of array1) {
    for (const element2 of array2) {
      if (element1 === element2) {
        commonElements.push(element1);
        break; // Break to avoid adding duplicates
      }
    }
  }

  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findCommonElements(array1, array2);
console.log(result);
