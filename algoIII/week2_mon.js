function DllNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  
function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
}

DoublyLinkedList.prototype.add = function(data) {
    var node = new DllNode(data);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
}

DoublyLinkedList.prototype.display = function() {
    var str = '';
    var cur = this.head;
    while(cur) {
      str += cur.data + ' ' ;
      cur = cur.next;
    }
    console.log(str.trim());
}

DoublyLinkedList.prototype.prependVal = function(doublyLinkedList, appendVal, findVal) {
    var node = new DllNode(appendVal);
    var cur;
    if(!this.head) {
        return null;
    } else {
        cur = this.head;
        var before = cur;
    }
    while (cur) {
        if (cur.data === findVal) {
            if (cur != this.head) { 
                node.prev = cur.prev; 
                cur.prev = node;
                node.next = cur;
                before.next = node;
                return doublyLinkedList;
            } else {
                node.next = this.head;
                this.head.prev = node;
                this.head = node; 
                return doublyLinkedList;
            }
        }
        before = cur;
        cur = cur.next
    }
    return doublyLinkedList;
}

DoublyLinkedList.prototype.kthToLastVal = function(doublyLinkedList, k) {
    if(!this.head) {
        return null;
    } else {
        cur = this.head;
    }
    let res = null;
    while (cur) {
        if(cur.data === k) {
            res = 0;
            while (cur.next) {
                res++;
                cur = cur.next;
            }
            return res;
        }
        cur = cur.next;
    }
    return res;
}

DoublyLinkedList.prototype.isValidDlist = function(doublyLinkedList) {
    if(!this.head) {
        return null;
    } else {
        cur = this.head;
    }
    
    let run = cur.next;
    let res = false;
    while (cur.next) {
        if (cur.next === run) {
            res = true;
        } else {
            res = false;
            return res;
        }
        if (run.prev === cur) {
            res = true;
        } else {
            res = false;
            return res;
        }
        cur = cur.next;
        run = cur.next;
    }
    return res;
}

DoublyLinkedList.prototype.palindrome = function(list) {
    if(!this.head) { return null; } 

    let cur = this.head;
    let las = this.tail;
    let length = 0;

    while(cur) {
        length++;
        cur = cur.next;
    }

    cur = this.head;
    let med = Math.floor(length / 2);

    for (var i = 0; i<med; i++) {
        if (cur.data != las.data) {
            return false;
        }
        cur = cur.next;
        las = las.prev;
    }
      return true;
}
  

// ====== test area ==== create a new doublyLinkedList ====//
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.display(); 
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(2);
doublyLinkedList.add(1);
// ====== prependVal() ===================================//
// doublyLinkedList.prependVal(doublyLinkedList, 9, 4); 
// doublyLinkedList.display();  
// ====== KthToLastValue()) ==============================//
// let kth = doublyLinkedList.kthToLastVal(doublyLinkedList, 3); 
// console.log(kth); 
// ====== isValidDlist() =================================//
// var node1 = new DllNode(34);
// doublyLinkedList.head.next.next = node1;
// let valid = doublyLinkedList.isValidDlist(doublyLinkedList); 
// console.log(valid);
// doublyLinkedList.display();   
// ====== palindrome() ===================================//
// doublyLinkedList.display();  
// let pal = doublyLinkedList.palindrome(doublyLinkedList); 
// console.log(pal); 
// ====== xxxxxxxxx() ====================================//
