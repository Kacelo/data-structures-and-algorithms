// 1. create a function to create new nodes

// buttons and inputs
const insertButton = document.getElementById('insertBtn')
const insertHeadButton = document.getElementById('insertHeadBtn')
const removeButton = document.getElementById('removeBtn')
const removeHeadButton = document.getElementById('removeHeadBtn')
let resEle = document.querySelector(".result");

function createNode(value) {
    return {
      value: value,
      next: null,
    };
  }
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    //   creating a new node
insert(value) {
    this.length++;
    let newNode = createNode(value); // or use new Node(value);\

    if(this.tail){
        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  insertHead(value) {
    this.length++;
    let newNode = createNode(value);
  
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }
  
    this.head = this.tail = newNode;
    return newNode;
  }

  print() {
    let current = this.head;
    // while (current>5) {
    //   console.log(current.value);
    //   current = current.next;
    //   return resEle.innerHTML +=`<li><div class='box'>current: ${current.value} next:${current.next.value}</div></li>`;
    // }

    for(var i =0; i<this.length; i++){
        // console.log(current.value);
      current = current.next;
     resEle.innerHTML +=`<li><div class='box'>cc ${current.next.value}</div></li>`;
    }
  }

  remove() {
    if (this.tail) {
        this.length--;
        const tailNode = this.tail;
        // search for the node before tail
        let currentNode = this.head;
        // The while loop stops when the node next to tail node is found
        while (currentNode.next != tailNode) {
          currentNode = currentNode.next;
        }
        const beforeTail = currentNode;
        this.tail = beforeTail;
        this.tail.next = null;
    
        return tailNode;
    }
    return undefined;
  }
  removeHead() {
    if (this.head) {
      this.length--;
      const removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }
    return undefined;
  }

  }
const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(true);
linkedList.insert(20);
linkedList.insert(true);
linkedList.insert(20);
linkedList.print(); // 7 true 20






