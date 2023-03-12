const arr = [5, 3, 8, 4, 1];

const bubbleSort = (arr) => {
  let length = arr.length;
  //
  while (length !== 0) {
    let maxIndex = 0;
    for (let i = 1; i < length; i++) {
      //
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        maxIndex = i;
      }
    }
    length = maxIndex;
  }
  return arr;
};

console.log(bubbleSort(arr));
