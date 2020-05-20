// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        let val = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = val;
      }
    }   
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMinOf = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMinOf]) {
        indexMinOf = j;
      }
    }

    if (i !== indexMinOf) {
      let temp = arr[i];
      arr[i] = arr[indexMinOf];
      arr[indexMinOf] = temp; 
    }
  }

  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
