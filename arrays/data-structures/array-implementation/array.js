let popButton = document.getElementById("pop-button");
let pushButton = document.getElementById("push-button");
let inputVal = document.getElementById("array-input");
let resEle = document.querySelector(".container");
let insertButton = document.getElementById("insert-button");
let indexValue = document.getElementById("indexValue");
let insertValue = document.getElementById("insertValue");
let deleteButton = document.getElementById("delete-button");
let deleteValue = document.getElementById("deleteValue");
let findButton = document.getElementById("find-button");
let findIndex = document.getElementById("findValue");
// declare Array

const items = [1, 2 ,3];
const count = items.length;

// make function to insert at a certain index
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
Array.prototype.delete = function (index) {
  this.splice(index, 1);
};

Array.prototype.findAt=function(index) {

  for (var i = 0; i < items.length; i++) {
    if (index === (items.indexOf(items[i]))) {
      console.log("found ", items[i]);
    }
    console.log('not found')
    // console.log(items.indexOf(items[i]))
  }
}

function addElements() {
  let contents = items
    .map((content) => `<li><div class='box'>${content}</div></li>`)
    .join("\n");
  document.querySelector("ul").innerHTML = contents;

  console.log(contents);
}

insertButton.addEventListener("click", () => {
  items.insert(indexValue.value, insertValue.value);
  indexValue.value = "";
  insertValue.value = "";
  addElements();
});

deleteButton.addEventListener("click", () => {
  items.delete(deleteValue.value);
  deleteValue.value = "";
  addElements();
});
popButton.addEventListener("click", () => {
  items.pop();
  addElements();
});
pushButton.addEventListener("click", () => {
  items.push(inputVal.value);
  inputVal.value = "";
  addElements();
});
findButton.addEventListener("click", ()=>{
  items.findAt(findIndex.value)
  findIndex.value="";
})

