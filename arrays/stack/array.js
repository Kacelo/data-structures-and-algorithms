let elements = ["sample ", "Sample "];
let count = elements.length;
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

// event listeners
btnPop.addEventListener("click", () => {
  elements.pop();

  addElements();
});
btnPush.addEventListener("click", () => {
  elements.push(arrInput.value);
  arrInput.value = "";
  this.count += 1;

//   amount of time before function is called
  setTimeout(() => {
    addElements();
  }, 1000);
});
