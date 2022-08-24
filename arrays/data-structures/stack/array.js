let elements = ["sample ", "Sample "];
let count = 3;

//the condition when an array is full
function stackFullCheck() {
  if (elements.length > count) {
    alert("stack is full, your button will be disabled now");
    document.getElementById("push-button").disabled = true;
    return true;
  }
  return false;
}

//the condition when an array is empty
function stackEmpty() {
  if (elements.length === 0) {
    alert("stack empty, your button will be disabled now");
    document.getElementById("pop-button").disabled = true;
  }
}

function addElements() {
  // mapping through to get exact values of Array
  let cont = elements.map((content) => {
    console.log(content);
    return content;
  });

  // mapping through array and displaying contents into a list item
  let contents = elements
    .map(
      (content) =>
        `<li><div class='box'>${content}, index: ${viewID(content)}</div></li>`
    )
    .join("\n");
  document.querySelector("ul").innerHTML = contents;
}

// function to display element index according to array content
// with use of indexOf() function.
function viewID(id) {
  let index = elements.indexOf(id);

  return index;
}

// to display sample elements
addElements();

// buttons
let btnPush = document.getElementById("push-button");
let arrInput = document.getElementById("array-input");
let btnPop = document.getElementById("pop-button");
let btnPeek = document.getElementById("peek-button");

// event listeners
btnPop.addEventListener("click", () => {
  stackEmpty();
  elements.pop();
  addElements();
});

// event listeners
btnPeek.addEventListener("click", () => {
  peek();
});

btnPush.addEventListener("click", () => {
  //if statement should return true or false

  if (!stackFullCheck()) {
    elements.push(arrInput.value);
    arrInput.value = "";
    this.count += 1;

    //   amount of time before function is called
    setTimeout(() => {
      addElements();
    }, 1000);
  }
});

function peek() {
  if (stackEmpty()) {
    return;
  }
  let peekElement = elements[elements.length - 1];
  alert('Picked value is '+ peekElement)
  return peekElement;

  // return this.container[this.container.length - 1];
}
