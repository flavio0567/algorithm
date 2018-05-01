//===== Linked Lists ==========//
function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  // this.tail = null;
  // this.numberOfValues = 0;
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

SinglyLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;
  while(current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
};

SinglyLinkedList.prototype.addFront = function(firstNode, data)  {
var node = new Node(data);
node.next = this.head;
this.head = node;
this.numberOfValues++;
return node;
}

SinglyLinkedList.prototype.removeFront = function(firstNode) {
if (!this.head) { return null};

tempNode = this.head;
this.head = this.head.next;

tempNode = null;
// this.numberOfValues--;
return tempNode;
}

contains = function(list, val) {
if(!list) {
  return false;
}
var current = list.head;
while(current) {
  if(current.data === val) {
    return true;
  }
  current = current.next;
} 
return false;
}

front = function(firstNode) {
if (!this.head) { return null};

if(!list) {
  return false;
}
var current = list.head;
while(current) {
  if(current.data === val) {
    return true;
  }
  current = current.next;
} 
return false;
}

// ===== test area ==============================//
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.print(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add('get');
singlyLinkedList.print(); // => 1 2 3 4
singlyLinkedList.addFront(1, 34);
singlyLinkedList.print(); // => 34, 1, 2 3 4 
singlyLinkedList.removeFront(34);
singlyLinkedList.print(); // => 1 2 3 4
var con = contains(singlyLinkedList, 'get');
console.log('contains?', con);
