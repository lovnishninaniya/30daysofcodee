function findSingleElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Handle edge cases
  if (arr.length === 1) {
    return arr[0];
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if arr[mid] is the unique element
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    }

    // If arr[mid] is equal to the previous element,
    // adjust the search range accordingly
    if (arr[mid] === arr[mid - 1]) {
      // If mid is even, move right
      // If mid is odd, move left
      mid % 2 === 0 ? (left = mid + 1) : (right = mid - 2);
    } else {
      // If mid is even, move left
      // If mid is odd, move right
      mid % 2 === 0 ? (right = mid - 1) : (left = mid + 2);
    }
  }

  return -1; // Not found (shouldn't reach this point in a valid input)
}

const sortedArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7];
const uniqueElement = findSingleElement(sortedArray);
console.log(uniqueElement);
