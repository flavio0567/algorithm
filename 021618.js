function shuffle(arr, num) {
    if (num > arr.length) { return null;}

    var pos = arr.length - num;
    var temp = [];
    for (var idx = 0; idx < num; idx++){
        temp[idx] = arr[pos];
        pos++; 
    }
    for (idx ; idx < arr.length; idx ++) {
        temp[idx] = arr[idx-num];
    }
    return temp;
}
var myArr = shuffle([1,2,3,4,5], 3);
console.log(myArr);
