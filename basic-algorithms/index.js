var container = document.getElementById("array");
let currentArray = [];
// Function to generate the array of blocks
function generateArray() {
  for (var i = 0; i < 20; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var value = Math.ceil(Math.random() * 100);

    //Populating the array
    currentArray.push(value);

    // Creating element div
    var array_ele = document.createElement("div");

    // Adding class 'block' to div
    array_ele.classList.add("block");

    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

// function to generate new random array
function generate() {
  window.location.reload();
}
generateArray();

function counting() {
  let count = 0;
  var setCountValue = document.getElementById("countValue");

  for (let index = 0; index < currentArray.length; index++) {
    const element = currentArray[index];
    count++;
  }
  setCountValue.innerText = `The number of elements in the array is: ${count}`;
}
function maximum() {
  let max = currentArray[0];
  var setCountValue = document.getElementById("countValue");

  for (let index = 1; index < currentArray.length; index++) {
    if (max < currentArray[index]) max = currentArray[index];
  }
  setCountValue.innerText = `The maximum value is: ${max}`;
}
function minimum() {
  let min = currentArray[0];
  var setCountValue = document.getElementById("countValue");

  for (let index = 1; index < currentArray.length; index++) {
    if (min > currentArray[index]) min = currentArray[index];
  }
  setCountValue.innerText = `The minimum value is: ${min}`;
}
function summing() {
  let sum = 0;
  var setCountValue = document.getElementById("countValue");

  for (let index = 0; index < currentArray.length; index++) {
    sum += currentArray[index];
  }
  setCountValue.innerText = `The total is: ${sum}`;
}
function searching(number) {
  var setCountValue = document.getElementById("countValue");
  for (let index = 0; index < currentArray.length; index++) {
    if (number === currentArray[index]) {
      setCountValue.innerText = `Number found at index: ${index}`;
      return;
    } else {
        setCountValue.innerText = `The number ${number} was not found in the array`;

    }
  }
}
