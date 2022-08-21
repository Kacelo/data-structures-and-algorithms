const container = document.getElementById("array");
let currentArray = [];
const setCountValue = document.getElementById("countValue");

function reset(blocks) {
  for (let index = 0; index < blocks.length; index++) {
    blocks[index].style.backgroundColor = "#6b5b95";
  }
}

function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("generteButton").disabled = true;
  document.getElementById("generteButton").style.backgroundColor = "#d8b6ff";
  // To disable the button "counting"
  document.getElementById("countingButton").disabled = true;
  document.getElementById("countingButton").style.backgroundColor = "#d8b6ff";
  // To disable the button "minimum"
  document.getElementById("minimumButton").disabled = true;
  document.getElementById("minimumButton").style.backgroundColor = "#d8b6ff";
  // To disable the button "maximum"
  document.getElementById("maximumButton").disabled = true;
  document.getElementById("maximumButton").style.backgroundColor = "#d8b6ff";
  // To disable the button "summing"
  document.getElementById("summingButton").disabled = true;
  document.getElementById("summingButton").style.backgroundColor = "#d8b6ff";
  // to disable the button "searching"
  document.getElementById("search").disabled = true;
  document.getElementById("search").style.backgroundColor = "#d8b6ff";
}
function enable() {
  // To enable the button "Generate New Array"
  document.getElementById("generteButton").disabled = false;
  document.getElementById("generteButton").style.backgroundColor = "#6b5b95";
  // To enable the button "counting"
  document.getElementById("countingButton").disabled = false;
  document.getElementById("countingButton").style.backgroundColor = "#6b5b95";
  // To enable the button "minimum"
  document.getElementById("minimumButton").disabled = false;
  document.getElementById("minimumButton").style.backgroundColor = "#6b5b95";
  // To enable the button "maximum"
  document.getElementById("maximumButton").disabled = false;
  document.getElementById("maximumButton").style.backgroundColor = "#6b5b95";
  // To enable the button "summing"
  document.getElementById("summingButton").disabled = false;
  document.getElementById("summingButton").style.backgroundColor = "#6b5b95";
  // to enable the button "searching"
  document.getElementById("search").disabled = false;
  document.getElementById("search").style.backgroundColor = "#6b5b95";
}
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

async function counting(delay = 500) {
  //disable the buttons
  disable();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);

  //Setting the count to 0
  let count = 0;

  for (var i = 0; i < blocks.length; i += 1) {
    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#FF4949";
    count++;
    setCountValue.innerText = `The number of elements in the array is: ${count}`;

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  //enabling the buttons once operation is complete
  enable();
}
async function maximum(delay = 500) {
  //disable the buttons
  disable();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);

  //Setting the first element as the minimum
  let max = Number(blocks[0].childNodes[0].innerHTML);
  blocks[0].style.backgroundColor = "#13CE66";

  for (var i = 1; i < blocks.length; i += 1) {
    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#FF4949";

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    // values in array
    var cuurentValue = Number(blocks[i].childNodes[0].innerHTML);

    // var to store index where found value is stored
    var index = blocks.length - (blocks.length - i);

    // if the minimum is greater than the current value set the minimum to the current value
    if (max < cuurentValue) {
      max = cuurentValue;
      blocks[i].style.backgroundColor = "#13CE66";
      // display message
      setCountValue.innerText = `The maximum value is: ${max} at index ${index}`;
    }
  }
  enable();
}

async function minimum(delay = 500) {
  disable();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  reset(blocks);

  //Setting the first element as the minimum
  let min = Number(blocks[0].childNodes[0].innerHTML);
  blocks[0].style.backgroundColor = "#13CE66";

  for (var i = 1; i < blocks.length; i += 1) {
    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#FF4949";

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    // values in array
    var cuurentValue = Number(blocks[i].childNodes[0].innerHTML);

    // var to store index where found value is stored
    var index = blocks.length - (blocks.length - i);

    // if the minimum is greater than the current value set the minimum to the current value
    if (min > cuurentValue) {
      min = cuurentValue;
      blocks[i].style.backgroundColor = "#13CE66";
      // display message
      setCountValue.innerText = `The minimum value is: ${min} at index ${index}`;
    }
  }
  enable();
}
async function summing(delay = 500) {
  //disable the buttons
  disable();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);

  //Setting the count to 0
  let sum = 0;

  for (var i = 0; i < blocks.length; i += 1) {
    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#FF4949";
    sum += currentArray[i];
    setCountValue.innerText = `The total is: ${sum}`;

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  //enabling the buttons once operation is complete
  enable();
}
function searching(number) {
  for (let index = 0; index < currentArray.length; index++) {
    if (number === currentArray[index]) {
      setCountValue.innerText = `Number found at index: ${index}`;
      return;
    } else {
      setCountValue.innerText = `The number ${number} was not found in the array`;
    }
  }
}

async function searchAlgorithm(delay = 500) {
  disable();
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);

  // value from user to be searched
  let arrInput = document.getElementById("array-input").value;

  for (var i = 0; i < blocks.length; i += 1) {
    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#FF4949";
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    console.log(arrInput);
    console.log(Number(blocks[i].childNodes[0].innerHTML));
    // values in array
    var values = Number(blocks[i].childNodes[0].innerHTML);
    // variable to store index where found value is stored
    var index = blocks.length - (blocks.length - i);
    // if statement to compare values in array to value to find
    if (values == arrInput) {
      console.log("value found");
      // display message
      setCountValue.innerText = `Number ${arrInput} found at index: ${index}`;
      enable();
      return;
    }
  }
  setCountValue.innerText = `The number ${arrInput} was not found in the array`;
  enable();
}
