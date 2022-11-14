//visualize a linked list

// buttons and inputs
const insertButton = document.getElementById("insert-button");
const insertHeadButton = document.getElementById("insertHeadBtn");
const displayList = document.getElementById("displayList");
const removeHeadButton = document.getElementById("removeHeadBtn");
//constant to for remove tail button
const removeTailButton = document.getElementById("removeTailBtn");
let resEle = document.querySelector(".result");
const insertValue = document.getElementById("insertValue");
const resultText = document.querySelector(".result-text");
const insertHeadValue = document.getElementById("array-input");
//constant for deleteValue input field
const deleteValue = document.getElementById("deleteValue");
//constant for delete button
const deleteButton = document.getElementById("delete-button");
// creating an instace of the linked list
var LinkedList = function () {
  this.head = null;
  this.tail = null;
};
// creating an instace of the Node
var Node = function (value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
};
// function to add value to tail
LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};
// function to remove value from head
LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null;
  }
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
};
// function to check if value is there
LinkedList.prototype.contains = function (target) {
  var node = this.head;
  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;
  }
  return false;
};
// function to add value to head
LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (value) {
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  } else {
    resultText.innerHTML = `Error! cannot add null value, enter a value`;
  }
};

//method to delete node from linked list given a value
LinkedList.prototype.deleteNode = function (value) {
  var node = this.head;
  while (node) {
    if (node.value === value) {
      console.log("yes");
      if (node.prev) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }
      return true;
    }
    node = node.next;
  }
  return false;

  // if(node.value ==0){
  //   this.head = node.next;
  //   return
  // }
  // for (i = 0; node != null && i < value - 1; i++)
  // node = node.next;

  //  // If position is more than number of nodes
  //  if (node == null || node.next == null)
  //  return;

  //   // Node temp->next is the node to be deleted
  //   // Store pointer to the next of node to be deleted
  //    next = temp.next.next;

  //    // Unlink the deleted node from list
  //   node.next = next;
};
function deleteNode(position) {
  // If linked list is empty
  if (head == null) return;

  // Store head node
  var temp = head;

  // If head needs to be removed
  if (position == 0) {
    // Change head
    head = temp.next;
    return;
  }

  // Find previous node of the node to be deleted
  for (i = 0; temp != null && i < position - 1; i++) temp = temp.next;

  // If position is more than number of nodes
  if (temp == null || temp.next == null) return;

  // Node temp->next is the node to be deleted
  // Store pointer to the next of node to be deleted
  var next = temp.next.next;

  // Unlink the deleted node from list
  temp.next = next;
}
// function to remove value from tail
LinkedList.prototype.removeTail = function () {
  if (!this.tail) {
    return null;
  }
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return val;
};

//print contents of linked list to resEle
LinkedList.prototype.printList = function () {
  let node = this.head;
  let result = "";
  while (node) {
    //add li to result
    result += `<li class='box'>${node.value}</li>`;
    node = node.next;
  }
  //change the innerHTML of resultText the value of this.head and this.tail
  if (this.head && this.tail) {
    resultText.innerHTML = `The Value conatined at the head is: ${this.head.value} & 
  The Value conatined at the Tail is: ${this.tail.value}`;
  } else if (this.head === null) {
    resultText.innerHTML = `All Values have been removed`;
  } else if (!this.tail) {
    resultText.innerHTML = `The Value conatined at the head is: ${this.head.value} & 
    The Value conatined at the Tail is only tail: ${this.tail.value}`;
  } else if (this.head === null && this.tail === null) {
    resultText.innerHTML = `The Value conatined at the head is: ${this.head.value} & 
    The Value conatined at the Tail is yeaaa: ${this.tail.value}`;
  }
  //change the innerHTML of resEle to result
  resEle.innerHTML = result;
};

var list = new LinkedList();
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.addToHead(3);

//insert button event listener executes addToTail method when the insert button is clicked
//adds the value in the input field to the tail (end) of the linked list
insertButton.addEventListener("click", function () {
  if (insertHeadValue.value) {
    list.addToTail(insertValue.value); //print list
    list.printList();
  } else {
    resultText.innerHTML = `Error! cannot add null value, enter a value`;
  }
});

//insert head button event listener executes addToHead method when the insert head button is clicked
//inserts the element at the beginning of the list
insertHeadButton.addEventListener("click", function () {
  //call the addToHead method
  if (insertHeadValue.value) {
    list.addToHead(insertHeadValue.value);
    //print list
    list.printList();
  } else {
    resultText.innerHTML = `Error! cannot add null value, enter a value`;
  }

  //log the list
  console.log("This is the list after insert head", list);
});

//remove head button event listener executes removeHead method when the remove head button is clicked
//removes the first element from the list
removeHeadButton.addEventListener("click", function () {
  //calling the removeHead method

  list.removeHead();

  //print list
  list.printList();

  //log the list
  console.log("This is the list after remove head", list);
});

//display list button event listener executes printList method when the display list button is clicked
//displays the list
displayList.addEventListener("click", function () {
  //calling the printList method
  list.printList();

  //log the list
  console.log("This is the list after display list", list);
});

//remove tail button event listener executes removeTail method when the remove tail button is clicked
//removes the last element from the list
removeTailButton.addEventListener("click", function () {
  //calling the removeTail method
  list.removeTail();

  //print list
  list.printList();

  //log the list
  console.log("This is the list after remove tail", list);
  resEle.innerHTML += `${LinkedListpseudo[1]}`;
});

//delete button event listener executes removeNode method when the remove node button is clicked
//removes the node that matches the value provided
deleteButton.addEventListener("click", function () {
  //calling the removeNode method
  if (deleteValue.value) {
    list.deleteNode(Number(deleteValue.value));
    console.log(
      "This is the list after delete node",
      list.deleteNode(deleteValue.value)
    );

    //print list
    list.printList();
  } else {
    resultText.innerHTML = `Error! cannot delete, please enter a value`;
  }

  //log the list
  console.log("This is the list after remove node", list);
});
