const arr = [5, 3, 8, 4, 1];

const insertionSort = (arr) => {
  //
  for (let i = 1; i < arr.length; i++) {
    let sorted = i - 1;
    while (sorted > -1 && arr[sorted] > arr[sorted + 1]) {
      let temp = arr[sorted];
      arr[sorted] = arr[sorted + 1];
      arr[sorted + 1] = temp;
      sorted--;
    }
  }
  return arr;
};

console.log(insertionSort(arr));
