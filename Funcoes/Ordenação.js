function Ordenação(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...Ordenação(left), pivot, ...Ordenação(right)];
  }
  
  const unsortedArr = [5, 3, 7, 1, 8, 2, 9, 4];
  const sortedArr = Ordenação(unsortedArr);
  console.log(sortedArr); // [1, 2, 3, 4, 5, 7, 8, 9]

module.exports = Ordenação;