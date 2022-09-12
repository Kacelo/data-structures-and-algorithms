let elements = ["sample ", "Sample"];
//maximum number of elements in the stack
let limit = 5;
// buttons
const btnPush = document.getElementById("push-button");
const arrInput = document.getElementById("array-input");
const btnPop = document.getElementById("pop-button");
const btnPeek = document.getElementById("peek-button");
const btnEmpty = document.getElementById("empty-button");
const isEmptyLabel = document.getElementById("isEmpty");
let functionRes = document.querySelector(".function-result");

//check if stack is full
function isFull() {
  if (elements.length > limit) {
    return true;
  }
  return false;
}

//the condition when an stack is empty
function isEmpty() {
  if (elements.length === 0) {
    return true;
  }
  return false;
}
//display stack content
function displayElements() {
  // mapping through stack and displaying contents into a list item
  let contents = elements
    .map((content, index) => {
      return `<li><div class='box'>${content}, index: ${index}</div></li>`;
    })
    .join("\n");
  document.querySelector("ul").innerHTML = contents;
}

// to display stack elements
displayElements();

// isEmpty button
btnEmpty.addEventListener("click", () => {
  if (isEmpty()) {
    isEmptyLabel.innerHTML = "Stack is empty";
  } else {
    isEmptyLabel.innerHTML = "Stack is not empty";
  }
});


// event listeners
btnPop.addEventListener("click", async () => {
	functionRes.replaceChildren();
  isEmptyLabel.innerHTML = "";
  if (!isEmpty()) {
    disableButton(btnPop);
    //enable push button
    enableButton(btnPush);
    elements.pop();

    //wait for .5 sec before enabling the pop button and adding the element to the stack
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        displayElements();
        if (isEmpty()) disableButton(btnPop);
      }, 500)
    );
    enableButton(btnPop);
  }
});

// Check the last element of the stack
btnPeek.addEventListener("click", () => {
  isEmptyLabel.innerHTML = "";
	functionRes.replaceChildren();
  if (isEmpty()) {
    return  functionRes.innerHTML += `stack is empty!`;;
  }

  const lastElement = elements[elements.length - 1];
  functionRes.innerHTML += `Peek value is: ${lastElement}`;
  // return lastElement;
});

btnPush.addEventListener("click", async () => {
	functionRes.replaceChildren();
  const value = arrInput.value;
  isEmptyLabel.innerHTML = "";
  const lastElement = elements[elements.length - 1];

  if (!isEmpty()) {
    //check if there is a mismatch in type between the last element and the new element
    if (
      (isNumber(value) && isString(lastElement)) ||
      (isNumber(lastElement) && isString(value))
    ) {
      if (isNumber(value)) {
        alert("Only enter strings please ");
        return;
      } else {
        alert("Only enter numbers please ");
        return;
      }
    }
  }

  // if stack is full, disable the push button
  if (!isFull()) {
    disableButton(btnPush);
    //enable the pop button when an element is pushed into the stack
    if (isEmpty()) {
      enableButton(btnPop);
    } 
	//push entered value into the array
	if(arrInput.value){
		elements.push(arrInput.value);
		arrInput.value = "";
	}
	else{
		functionRes.innerHTML += `Error! Please enter a value`;
	}
  

    //wait for .5 sec before enabling the pop button and adding the element to the stack
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        displayElements();
        if (!isFull()) enableButton(btnPush);
      }, 500)
    );
  }
});

//disable any button by passing the button as an argument
function disableButton(button) {
  button.disabled = true;
  button.style.backgroundColor = "#d8b6ff";
}

//enable any button by passing the button as an argument
function enableButton(button) {
  button.disabled = false;
  button.style.backgroundColor = "#6f459e";
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
