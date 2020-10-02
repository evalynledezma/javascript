let mean = [1,2,3,4,5]
let total = 0;
for(let i = 0; i < mean.length; i++) {
    total += mean[i];
let avg = total / mean.length;
}
console.log(total[i])


let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));

// Jordan's Solution
const getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const total = arr.reduce(reducer);
    return total / arr.length;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  getAverage(arr);
  