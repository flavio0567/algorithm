//===== Linked Lists ==========//
function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    return this.head;}

  var cur = this.head;

  while(cur.next) {
    cur = cur.next;}

  cur.next = node;

};

SinglyLinkedList.prototype.display = function() {
  var string = '';
  var cur = this.head;
  while(cur) {
    string += cur.data + ' ';
    cur = cur.next;
  }
  console.log(string.trim());
};

length = (ssl) => {
  var node1 = ssl.head;
  var len = 0;

  if(!node1) 
  { 
    return null;
  } else {
    len++;
  }

  var cur = node1;

  while(cur.next) 
  {
    cur = cur.next;
    len++;
  }
   
  return len;
}

average = (node) => {
  var len = 0;
  var sum = 0;

  this.head = node;

  if(!this.head) {
    return null;
  } else {

    if (typeof this.head.data === 'number') {
      sum = this.head.data;
      len++;}
  }

  var cur = this.head;

  while(cur.next) 
  {
    cur = cur.next;
    if (typeof cur.data === 'number') {
      sum = sum + cur.data;
      len++;
    }
  }

  var avg = Math.floor(sum / len); 
  return avg;
}

min = (node) => {
  this.head = node;
  var min;
  cur = this.head;
  if (typeof cur.data === 'number') {
      min = cur.data;
  }
  var cur = cur.next;
  while(cur) {
    if (typeof cur.data === 'number') {
        if (cur.data < min ) {
            min = cur.data;
        }
    }
    cur = cur.next;
  }
  return min;
}

max = (node) => {
  this.head = node;
  var max;
  cur = this.head;
  if (typeof cur.data === 'number') {
      max = cur.data;
  }
  var cur = cur.next;
  while(cur) {
    if (typeof cur.data === 'number') {
        if (cur.data > max ) {
            max = cur.data;
        }
    }
    cur = cur.next;
  }
  return max;
}

prependVal = (list, value, before) => {
  this.head = list.head;
  if (!this.head) {
      return null;
  }
  
  var node = new Node(value);
  var cur = this.head;
  
  while(cur.next) {
    if (cur.next.data === before.data) {
        var temp = cur.next;
        cur.next = node;
        node.next = temp;
        return list;
    }
    cur = cur.next;
  }
  return list;
}

removeVal = (list, value) => {
  this.head = list.head;
  if (!this.head) { return null;}

  var cur = this.head;

  while(cur.next) {
    if (cur.next.data === value) {
        cur.next = cur.next.next;
        return list;
    }
    cur = cur.next;
}
  return list;
}

appendVal = (list, value, after) => {
  this.head = list.head;
  if (!this.head) {
      return null;
  }
  
  var node = new Node(value);
  var cur = this.head;
  
  while(cur) {
    if (cur.data === after.data) {
        var temp = cur.next;
        cur.next = node;
        node.next = temp;
        return list;
    }
    cur = cur.next;
  }
  return list;
}

// ===== test area ===========building a ssl===================//
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.display(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(4);
singlyLinkedList.add('coding');
singlyLinkedList.add('dojo');
singlyLinkedList.add('get');
singlyLinkedList.display(); // => 1 2 4 coding dojo get
// ===== length ==============================================//
console.log(length(singlyLinkedList)); // 6
// ===== average =============================================//
var node = singlyLinkedList.head;
console.log(average(node)); // average
// ===== min ================================================//
var node = singlyLinkedList.head;
console.log(min(node)); // min
// ===== max ================================================//
var node = singlyLinkedList.head;
console.log(max(node)); // max
// ===== display ============================================//
singlyLinkedList.display(); // 1 2 4 coding dojo get
// ===== prepemdVal =========================================//
var node = singlyLinkedList.head.next.next;
var node = new Node(4);
prependVal(singlyLinkedList, 3, node); // new list
singlyLinkedList.display(); // 1 2 3 4 coding dojo get
// ===== removeV=============================================//
removeVal(singlyLinkedList, 'get'); // 
singlyLinkedList.display(); // 1 2 3 4 coding dojo
// ===== appendVal ==========================================//
// var node = singlyLinkedList.head.next.next.next.next.next;
var node = new Node(4);
appendVal(singlyLinkedList, 5, node); // new list
singlyLinkedList.display(); // 1 2 append-after 34 4 coding dojo
// ===== end code ===========================================//