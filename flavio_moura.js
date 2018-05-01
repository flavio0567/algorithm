// Object Constructor - Constructs Node Objects = { val: #, next: null}
function sNode(val){
    this.val = val;
    this.next = null;
}   
// Object Constructor - Constructs List Objects = {head: null}
function sList(){
    this.head = null;
}

module.exports = {
    first_name: "flavio", // <--- Enter your first name within the string
    last_name: "moura", // <--- Enter your last name within the string
    email: "fmrocha1@comcast.net", // <--- Enter your email within the string
    reverseString: function(str){
        // Given a string (str), return the string in reverse.
        var newStr = [];

        for (var i = str.length-1; i >= 0; i--) {
            newStr += str[i];  
        }
        return newStr;

        // return type: String
    },
    removeLetter: function(str, char){
        // Given a string (str) and a character (char), return a string without the supplied character (char).
        var newStr = [];

        for (var i = 0; i < str.length; i++) {
            if (str[i] != char) {
                newStr += str[i];  
            }
        }
        return newStr;

        // return type: String
    },
    factorial: function(num) {
        // Return the factorial of a number (num)
        // Given: 0 Return 1 || Given: 1 Return 1 || Given: 2 Return 2
        // Given: 3 Return 6 || Given: 4 Return 24 || Given: 5 Return 120 
        var arr = [1];
        
        if(num < 0){return null;}

        for(var i=1; i<=num; i++){
            arr[i] = arr[i-1] * i;
        }
        return arr[num];

        // return type: Number
    },
    isBracketValid: function(str){
        // Given a string, returns whether the sequence of various brackets within it are valid. For example:
        // Given: "[] [] [ [] [] ]" or "[]" Return: true
        // Given: "[][]]" or "[][[[]]" Return: false
        if(str === ""){return false;}

        var bracket = {
            open: "[",
            close: "]"
        }
        var res = true;
        var count = 0;

        if ( str[0] === bracket.close ) {
            res = false;
            return res;
        }
        for (var i = 0; i < str.length;i++) {
            switch (str[i]) {
                case bracket.open:
                    res = false;
                    count += 1;
                    break;
                case bracket.close:
                    res = true;
                    count -= 1;
                    break;
            }
        }
        if ( count !== 0 ) {res = false;}

        return res;

        // return type: Boolean
    },
    isPalindromeStrict: function(str){
        // Create a function that returns a boolean whether the string is a strict palindrome. 
        // Given "a x a" or "racecar" Return: true
        // Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false. 
        var med = Math.floor(str.length / 2);
        
        for (var i = 0; i < med; i++) {
            if (str[i] != str[str.length - 1 - i]){
                return false;
            }
        }
        return true;

        // return type: Boolean
    },
    insertAt: function(arr, idx, val){
        // Given an array (arr), index (idx), and additional value (val), insert the value into the array at the given index. Do this without using built-in array methods. Return the modified or new array.
        var newArr = [];
        var j = 0;

        for (var i = 0; i < arr.length; i++) {
            if (i === idx){
                newArr[j] = val;
                j++;
                newArr[j] = arr[i];
                j++;
            }   else   {
                newArr[j] = arr[i];
              j++;
            }
        }
        if (idx >= arr.length) { newArr[idx] = val; }

        return newArr;

        // return type: Array
    },
    removeAt: function(arr, idx){
        // Given an array (arr) and an index (idx), remove the value from the array, this should shorten the length of the array. Do this without using any built-in array methods except pop().
        if (idx >= arr.length || idx < 0) {return null;}
    
        var temp = [];
        var j = 0;
        var rem;
        
        for (var i = 0 ; i < arr.length; i++) {
          if(i == idx) {
            rem = arr[i];
            i++;
            temp[j] = arr[i];
          } else {
            temp[j] = arr[i];
          }
          j++;
        }
        if (idx >= arr.length-1) {temp.pop();}
        
        arr = temp;    
        return arr;

        // return type: Array
    },
    invertHash: function(hash){
        // Convert the given hash's keys to values and values to corresponding keys.
        // Given: {a:1,b:2}, return: {1:a,2:b}.
        var newObj = {};
        
        for (var key in obj) {
            newObj[hash[key]] = key;  
        }
        return newObj;

        // return type: Object
    },
    removeLastNode: function(node){
        // Given the head node, pop off the last node and return the head node (if applicable).
        var cur = this.head;

        if( cur.next === null ) {
            return cur;
        }
      
        var prev = null;
      
        while(cur.next != null) {
            prev = cur;
            cur = cur.next;
        }
         
        cur = prev;
        cur.next = null;
      
        return this.head;
        // return type: Node
    },
    // - - - - BONUS ALROTIHM - - - - 
    shiftValuesByNum: function(arr, num){
        // Given an array (arr), shift the array values by num.
        // Given: arr: [1,2,3,4,5], num: 1, Return: [5,1,2,3,4]
        // Given: arr: [1,2,3,4,5], num: 3, Return: [3,4,5,1,2]
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
        // return type: Array
    }
}