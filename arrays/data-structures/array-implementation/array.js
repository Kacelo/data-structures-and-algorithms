let popButton = document.getElementById("pop-button");
let pushButton = document.getElementById("push-button");
let inputVal = document.getElementById("array-input");
let resEle = document.querySelector(".searchResult");
let insertButton = document.getElementById("insert-button");
let indexValue = document.getElementById("indexValue");
let insertValue = document.getElementById("insertValue");
let deleteButton = document.getElementById("delete-button");
let deleteValue = document.getElementById("deleteValue");
let findButton = document.getElementById("find-button");
let findIndex = document.getElementById("findValue");
// declare Array

const items = [1, 2 ,3];
const count = items.length-1;

// make function to insert at a certain index
Array.prototype.insert = function (index, item) {
  this.splice(index, 1, item);
};
Array.prototype.delete = function (index) {
  this.splice(index, 1);
};

Array.prototype.findAt=function(index) {

  
  for (var i = 0; i < items.length; i++) {
    
    if (index == items.indexOf(items[i])) {
      console.log("found ", items[i], `at ${index}`);
     return resEle.innerHTML +=`value ${items[i]}, found at index:${index}`;
    }
    // else if(index > items.length){
    //   resEle.innerHTML +=`Array Index ${index} is Out Of Bounds`;
    // }
   
    // console.log(items.indexOf(items[i]))
    
  }
  resEle.innerHTML +=`Array Index ${index} is Out Of Bounds`;
  
}

Array.prototype.pushNew = function (item) {
 
  this.push(item)
 
};



function showElements() {
  let contents = items
    .map((content, index) => `<li><div class='box'>${content} index:${index} </div></li>`)
    .join("\n");
  document.querySelector("ul").innerHTML = contents;

  console.log(contents);
}

insertButton.addEventListener("click", () => {
  items.insert(indexValue.value, insertValue.value);
  indexValue.value = "";
  insertValue.value = "";
  showElements();
});

deleteButton.addEventListener("click", () => {
  items.delete(deleteValue.value);
  deleteValue.value = "";
  showElements();
});
popButton.addEventListener("click", () => {
  items.pop();
  showElements();
});
pushButton.addEventListener("click", () => {
  items.pushNew(inputVal.value);
  inputVal.value = "";
  showElements();
});
findButton.addEventListener("click", ()=>{
  resEle.replaceChildren();
  items.findAt(findIndex.value)
  findIndex.value="";
  resEle.innerHTML +=""
})

