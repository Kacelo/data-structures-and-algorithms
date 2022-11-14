let resEle = document.querySelector(".list");
let functionRes = document.querySelector(".function-result");
let front = document.getElementById("front");
let enqueueBtnEle = document.querySelector(".enqueueBtn");
let dequeueBtnEle = document.querySelector(".dequeueBtn");
let inputVal = document.getElementById("queueValue");
let message = document.getElementById("display");
let btnEmpty = document.getElementById("isEmpty");

class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
  }
}
// funtion to print out the value at the front of the queue
Queue.prototype.front = function () {
  if (!this.isEmpty()) {
    const firstElement = this.items[0];
    functionRes.replaceChildren();

    return (functionRes.innerHTML += `The Value at the front of the Queue is ${firstElement}`);
  } else {
    return (functionRes.innerHTML =
      "The Queue is empty, please enqueue values and try again");
  }
};
// function to enque value
Queue.prototype.enqueue = function (ele) {
  const lastElement = this.items[this.length - 1];
  if (this.length > 0) {
    if (
      (isNumber(ele) && isString(lastElement)) ||
      (isNumber(lastElement) && isString(ele))
    ) {
      // expection handling to prevent user from entering value types that do not match
      if (isNumber(ele)) {
        alert("Could not enqueue! only enter strings please ");
        return;
      } else {
        alert("Could not enqueue! only enter numbers please ");
        return;
      }
    }
  }
  console.log(lastElement);
  if (ele) {
    this.items[this.length] = ele;
    this.length += 1;

    functionRes.innerHTML = ele + " is added to the back of the queue";
  } else {
    functionRes.innerHTML += `Error! Please enter a value`;
  }
};
// function to remove value at the front of the queue
Queue.prototype.dequeue = function () {
  debugger;
  if (this.length === 0) {
    return (functionRes.innerHTML = "Underflow: no more elements to remove");
  }

  this.length -= 1;

  functionRes.innerHTML =
    this.items[length] + " is removed from the front of queue";

  return this.items.shift();
};
// function to display
Queue.prototype.display = function () {
  debugger;
  if (this.length == 0) {
    return (functionRes.innerHTML =
      "The Queue is empty, please enqueue values and try again");
  }

  for (let i = 0; i < this.length; i++) {
    resEle.innerHTML += `<li class ="queue-list"><div class='box'>${this.items[i]}</div></li>`;
  }
};

//convert value passed as an argument to a number and check if it is a number
function isNumber(value) {
  //convert value to number
  let number = Number(value);
  //regex to check if the value is a number
  let regex = /^[0-9]+$/;

  //return true if value is a number
  if (regex.test(number)) {
    return true;
  }
  //return false if value is not a number
  return false;
}

//convert value passed as an argument to a string and check if it is a string
function isString(value) {
  let string = String(value);
  let regex = /^[a-zA-Z]+$/;
  if (regex.test(string)) {
    return true;
  }
  return false;
}
// see if array is empty
Queue.prototype.isEmpty = function () {
  if (this.length === 0) {
    return true;
  }

  for (let i = 0; i < this.length; i++) {
    functionRes.replaceChildren();
    functionRes.innerHTML += `Queue contains values ${this.items}`;
  }
};

let queue1 = new Queue();
// BtnEle.addEventListener("click", () => {
//   functionRes.replaceChildren();
//   resEle.innerHTML = "";
//   queue1.display();
// });
enqueueBtnEle.addEventListener("click", () => {
  functionRes.replaceChildren();
  let ele = document.querySelector(".enqueueVal").value;

  queue1.enqueue(ele);
  resEle.replaceChildren();
  queue1.display();

  inputVal.value = "";
});
dequeueBtnEle.addEventListener("click", () => {
  functionRes.replaceChildren();
  queue1.dequeue();
  resEle.replaceChildren();
  queue1.display();
});
// isEmpty button
btnEmpty.addEventListener("click", () => {
  functionRes.replaceChildren();
  if (queue1.isEmpty()) {
    functionRes.innerHTML += `Queue is empty`;
  } else {
    console.log("not empty");
  }
});

front.addEventListener("click", () => {
  functionRes.replaceChildren();
  queue1.front();
});
