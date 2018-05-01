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
  singlyLinkedList.add(3);
//   singlyLinkedList.add('coding');
//   singlyLinkedList.add('dojo');
//   singlyLinkedList.add('get');
  singlyLinkedList.display(); // => 1 2 3
  // ===== length ==============================================//
  
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
