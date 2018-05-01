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
    this.head = firstNode;

    if (!this.head) { return null;}

    return this.head.data;
  }
  
  // ===== test area ======building a sll========//
  var singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.display(); // => ''
  singlyLinkedList.add(1);
  singlyLinkedList.add(2);
  singlyLinkedList.add(4);
  singlyLinkedList.add('coding');
  singlyLinkedList.add('dojo');
  singlyLinkedList.add('get');
  singlyLinkedList.display(); // => 1 2 3 coding dojo get
  // ===== addFront =======================================//
  singlyLinkedList.addFront(1, 34);
  singlyLinkedList.display(); // => 34 1 2 3 coding dojo get 
  // ===== removeFront ====================================//
  singlyLinkedList.removeFront(34);
  singlyLinkedList.display(); // => 1 2 3 coding dojo get
  // ===== contains ======================================//
  var con = contains(singlyLinkedList, 'Dojo');
  console.log('contains?', con); // contains? false
  // ===== front =========================================//
  var firstNode = singlyLinkedList.head;
  console.log(front(firstNode)); // 1
  // ===== end ===========================================//
  