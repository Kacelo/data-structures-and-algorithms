let resEle = document.querySelector(".result");
let BtnEle = document.querySelector(".Btn");
let enqueueBtnEle = document.querySelector(".enqueueBtn");
let dequeueBtnEle = document.querySelector(".dequeueBtn");
let inputVal = document.getElementById("queueValue")
// class Queue {
//    constructor() {
//       this.items = [];
//       this.length = 0;
//    }
// }

// declare storage and length
let elements = ["sample ", "Sample "];
let count = elements.length;

// function to enqueue

function enqueue(){
    for(var i =0; i<elements.length; i++){
        
    }
}
Queue.prototype.enqueue = function (ele) {
   this.items[this.length] = ele;
   this.length += 1;
};
Queue.prototype.dequeue = function () {
   debugger;
   if (this.length === 0) {
      return "Underflow: no more elements to remove";
   }
   tempNum = this.items[0];
   this.length -= 1;
   return tempNum;
};
  // mapping through array and displaying contents into a list item
  let contents = this.items
    .map(
      (content) =>
        `<li><div class='box'>${content}, index: ${viewID(content)}</div></li>`
    )
    .join("\n");
  document.querySelector("ul").innerHTML = contents;

Queue.prototype.display = function () {
   debugger;
   if (this.length == 0) {
      return "Stack is empty";
   }
   for (let i = 0; i < this.length; i++) {
      resEle.innerHTML += this.items[i] + " , ";
   }
};
let queue1 = new Queue();
BtnEle.addEventListener("click", () => {
   resEle.innerHTML = "";
   queue1.display();
});
enqueueBtnEle.addEventListener("click", () => {
   let ele = document.querySelector(".enqueueVal").value;
   resEle.innerHTML = ele + " is added to the back of the queue";
   queue1.enqueue(ele);
   inputVal.value = '';
});
dequeueBtnEle.addEventListener("click", () => {
   resEle.innerHTML =
   queue1.dequeue() + " is removed from the front of queue";
});