let resEle = document.querySelector(".list");
let functionRes = document.querySelector(".function-result");
let BtnEle = document.querySelector(".Btn");
let enqueueBtnEle = document.querySelector(".enqueueBtn");
let dequeueBtnEle = document.querySelector(".dequeueBtn");
let inputVal = document.getElementById("queueValue");
let message = document.getElementById("display");
class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
  }
}
Queue.prototype.enqueue = function (ele) {
  const lastElement = this.items[this.length - 1];
  if (this.length > 0) {
    if (
      (isNumber(ele) && isString(lastElement)) ||
      (isNumber(lastElement) && isString(ele))
    ) {
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
Queue.prototype.dequeue = function () {
  debugger;
  if (this.length === 0) {
    return (functionRes.innerHTML = "Underflow: no more elements to remove");
  }

  this.length -= 1;

  functionRes.innerHTML =
    this.items[this.length] + " is removed from the front of queue";

  return this.items.shift();
};

Queue.prototype.display = function () {
  debugger;
  if (this.length == 0) {
    return (functionRes.innerHTML = "Stack is empty");
  }

  for (let i = 0; i < this.length; i++) {
    resEle.innerHTML += `<li><div class='box'>${this.items[i]} index: ${i}</div></li>`;
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
function isEmpty() {
  if (this.length === 0) {
    return true;
  }
  return false;
}

let queue1 = new Queue();
BtnEle.addEventListener("click", () => {
  resEle.innerHTML = "";
  queue1.display();
});
enqueueBtnEle.addEventListener("click", () => {
  functionRes.replaceChildren();
  let ele = document.querySelector(".enqueueVal").value;

  queue1.enqueue(ele);
  // queue1.display();
  inputVal.value = "";
});
dequeueBtnEle.addEventListener("click", () => {
  functionRes.replaceChildren();
  queue1.dequeue();
  // queue1.display();
});
