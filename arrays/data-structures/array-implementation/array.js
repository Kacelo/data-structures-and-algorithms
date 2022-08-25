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
const items = [];


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
  }
  resEle.innerHTML +=`Array Index ${index} is Out Of Bounds`;
  
}

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
	if (items.length === 0) {
		return true;
	}
	return false;
}
Array.prototype.pushNew = function (item) {
  const lastElement = items[items.length-1];  
  console.log("last value" ,lastElement)
  //check if there is a mismatch in type between the last element and the new element
  // only run this function if the stack is not empty
  if (!isEmpty()) {
    if (
			(isNumber(item) && isString(lastElement)) ||
			(isNumber(lastElement) && isString(item))
		) {
			if (isNumber(item)) {
				alert('Only enter strings please ');
				return;
			} else {
				alert('Only enter numbers please ');
				return;
			}
      
		}

  }
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
pushButton.addEventListener("click",  () => {

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

