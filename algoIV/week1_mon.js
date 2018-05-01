//*  ===== rSigma() ============================ *//
let sum = 0;
function rSigma(num) {
    sum += num;
    num--;
    if (num > 0) {
        rSigma(num);
    }
    return sum;
}
var sig = rSigma(5);
console.log(sig);

//*  ===== rBinarySearch() ============================ *//
let len = null;
function rBinarySearch(arr, num) {
    if (!len) {
        len = arr.length-1;
    }
    // base case
    if (arr[len] === num) {
        return true;
    }
    len--;
    // forward progress
    if (len > 0) {
        rBinarySearch(arr, num)
    }
    // recursion step
    if (arr[len] === num) {
        return true;
    } else {
        return false;
    }
}
let myArray = rBinarySearch([1,2,3,4,5],3);
console.log(myArray);

//*  ===== rFib(num) ================================ *//
function rFib(num) {
    if(num === 0 || num === 1) { // base case
        return num;
    } else {
        if (num < 0) { return 0 };
        return rFib(Math.floor(num) - 1) + rFib(Math.floor(num) -2); // recursion step
    }
}

let fib = rFib(3.65);
console.log(fib);
