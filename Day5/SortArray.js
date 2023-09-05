const quickSortt = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSortt(leftArr), pivot, ...quickSortt(rightArr)];
};
arr=[20,4,34,6,-1,8,3]
quickSortt(arr)
