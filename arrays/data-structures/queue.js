let resEle = document.querySelector(".result");
let BtnEle = document.querySelector(".Btn");
let enqueueBtnEle = document.querySelector(".enqueueBtn");
let dequeueBtnEle = document.querySelector(".dequeueBtn");
let inputVal = document.getElementById("queueValue")
class Queue {
   constructor() {
      this.items = [];
      this.length = 0;
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

   this.length -= 1;

return this.items.shift();
};

Queue.prototype.display = function () {
//    debugger;
   if (this.length == 0) {
      return "Stack is empty";
   }
   for (let i = 0; i < this.length; i++) {
      resEle.innerHTML +=`<li><div class='box'>${this.items[i]}</div></li>`;

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