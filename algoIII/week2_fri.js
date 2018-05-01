function DllNode(data) {
    if (!(this instanceof DllNode)) {
        return new DllNode(data);
    }
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  
function DoublyLinkedList() {
    if (!(this instanceof DoublyLinkedList)) {
        return new DoublyLinkedList();
    }
    this.head = null;
    this.tail = null;
    this.display = function() {
        var str = 'List: ';
        var cur = this.head;
        while(cur) {
          str += cur.data + '-node ' ;
          if (cur.prev) { str += cur.prev.data + '-prev ' } ;
          if (cur.next) { str += cur.next.data + '-next | ' } ;
          cur = cur.next;
        }
        console.log(str.trim());
    }
    this.prependValue = function(list, val, newVal) {
        if(!this) { return null; }
        cur = this.head.next;
        before = this.head;
        if (!cur.next || before.data === val) {
            let node = new DllNode(newVal);
            this.head = node;
            this.tail = cur;
            cur.prev = this.head;
            this.head.next = cur;
        } else {
            while (cur) {
                if (cur.data === val) {
                    let node = new DllNode(newVal);
                    node.prev = before;
                    node.next = cur;

                    before.next = node;
                    cur.prev = node;
                    return this;
                }
                cur = cur.next;
                before = before.next;
            }
        }
    }
    this.kthToLastValue = function(list, k) {
        if(!this) { return null; }
        let cur = this.head;
        let res = null;
        while (cur.next) {
            if (cur.data === k) {
                cur = cur.next;
                while(cur) {
                    res++;
                    cur = cur.next;
                }
                return res;
            }
            cur = cur.next;
        }
        return res;
    }
    this.isValid = function(list) {
        if(!this.head) { return null; }
    
        let cur = this.head;
        let run = cur.next;

        while (cur.next) {
            if (cur.next === run && cur != this.tail) 
            { res =  true; 
            } else 
            { return false; 
            }

            if (run.prev === cur ) 
            { res =  true; 
            } else 
            { return false; 
            }

            cur = cur.next;
            run = cur.next;
        }
        if (cur != this.tail) { res = false; }

        return res;
    }
    this.palindrome = function(list) {
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
    this.loopStart = function(list) {
        if(!this.head) { return null; }

        let wal = this.head;
        let run = this.head;
        let start = true;
        let st_loop = false;

        while(wal && run && (run)) {
            if (wal === wal.next) { return wal; }
            if (wal === run && start === false) {
                return st_loop;
            }
            st_loop = wal;
            wal = wal.next;
            if (!run.next) { return  'no loop'; }
            run = run.next.next;
            start = false;
        }
        return 'no loop';
    }
 

}

let node1 = new DllNode(1);
let node2 = new DllNode(2);
let node3 = new DllNode(3);
let node4 = new DllNode(4);
let node5 = new DllNode(5);


node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = null;

node4.prev = node3;
node4.next = node5;

node5.prev = node4;
// node5.next = node1;

let dList = new DoublyLinkedList();

dList.head = node1;
dList.tail = node5;

// display()
// dList.display();

// prependValue()
// dList.prependValue(dList, 1, 9);
// dList.display();

// kthToLastValue()
// let k = dList.kthToLastValue(dList, 2);
// console.log(k);

// isValid()
// let valid = dList.isValid(dList);
// console.log(valid);

// palindrome()
// let pal = dList.palindrome(dList);
// console.log(pal);

// loopStart(list)
// let loop = dList.loopStart(dList);
// console.log(loop);

