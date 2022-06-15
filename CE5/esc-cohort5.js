// Question 1: gcd(a, b)
function gcd(a, b) {
  while (b) {
    var c = b;
    b = a % b;
    a = c;
  }
  return a;
}

// Question 2: parseCSV(csvfile)
function parseCSV(csvfile) {
  var arr = [];
  const fs = require("fs");
  const data = fs.readFileSync(csvfile, "utf8").toString();
  const splitString = data.split("\n");

  for (let i = 0; i < splitString.length - 1; i++) {
    arr.push(splitString[i].split(","));
  }
  return arr;
}

// Question 3: quickSort(arr)
function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSort(arr) {
  quickSortRecursive(arr, 0, arr.length - 1);
}

function quickSortRecursive(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
}

array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSort(array);
console.log(array);
