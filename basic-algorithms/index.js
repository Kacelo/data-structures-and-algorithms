// getting elements by their IDs and Classes in the html files
const container = document.getElementById("array");
let currentArray = [];
const setCountValue = document.getElementById("countValue");
let codeExplaination = document.getElementById("codeExplaination");
let insertValuesBtn = document.getElementById("insertValuesBtn");
let EvenValuesBtn = document.getElementById("EvenValuesBtn");
let GreaterValuesBtn = document.getElementById("GreaterValuesBtn");
let insertValuesInput = document.getElementById("insertValuesInput");
const ConditionsValuesInput = document.getElementById("ConditionValuesInput");
const header = document.querySelector(".header");
let customRange1 = document.getElementById("customRange1");
const invisibleDiv = document.getElementById("extraOperations");
let hideStuff = false;
let hideCount = false;

function hideInvisibleDiv() {
  if (invisibleDiv) {
    invisibleDiv.style.display = "none";
  }
}
const conditionValue = document.getElementById("ConditionsValuesInput");
let count = 0;
let pseudo = [
  "1. for i ← 0, a.length − 1 do",
  "if (a[i] == e) then",
  "3 return true",
  "end if",
  "end for",
  "return false",
];
const vall = null;
function showVal() {
  return customRange1.value;
}
// function to set range value
function getNewSliderValue() {
  return setTimeout(() => {
    customRange1.value;
  }, customRange1.value);
}

function reset(blocks) {
  for (let index = 0; index < blocks.length; index++) {
    blocks[index].style.backgroundColor = "#6b5b95";
  }
}

//Conditional check functions
// function that operates on values that are less than the value provided
async function CountLessThan(delay = showVal()) {
  // replacing result container before re rendering new data
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  // array that contains each step of the algorithm
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i]< c) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${countingPsuedo[0]}</li>
  <li id='setCountValue2'  class = 'listCss'>${countingPsuedo[1]}</li>
  <li id='setCountValue3'  class = 'listCss'>${countingPsuedo[2]}</li>
  <li id='setCountValue4'  class = 'listCss'>${countingPsuedo[3]}</li>
  <li id='setCountValue5'  class = 'listCss'>${countingPsuedo[4]}</li>
  <li id='setCountValue6'  class = 'listCss'>${countingPsuedo[5]}</li>
  `;
  //disable the buttons
  disableCounting();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Set Counter to Zero`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    // exception handling to prevent user from entering null or no values
    if (!ConditionsValuesInput.value) {
      alert("Error! Please enter a value");
      await new Promise((resolve) =>
        setTimeout(() => {
          enableCounting();
          resolve();
        }, 2000)
      );
      return;
    }
    if (!isNumber(ConditionsValuesInput.value)) {
      alert("Error! please enter numbers only");
      // To wait for .5 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          enableCounting();
          resolve();
        }, 2000)
      );
      return;
    }

    blocks[i].style.backgroundColor = "#FF4949";
    codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `Traversing through array to find numbers less than ${ConditionsValuesInput.value}`;
    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    if (currentArray[i] < ConditionsValuesInput.value) {
      // To change background-color of the
      // blocks to be compared
      document.getElementById("setCountValue3").style.backgroundColor =
        "#white";

      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      count++;
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `found a number Less than ${ConditionsValuesInput.value} then add it to count total`;
      header.innerText = `The number of elements less than ${ConditionsValuesInput.value} is: ${count}`;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 2000)
      );
      document.getElementById("setCountValue4").style.backgroundColor = "white";
    }

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `end loop and return the tolal count of values greater than ${ConditionsValuesInput.value}`;
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enableCounting();
}
// function that operates on values that are greater than the value provided
async function CountGreaterThan(delay = showVal()) {
  // replacing result container before re rendering new data
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  // array that contains each step of the algorithm
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i]> c) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${countingPsuedo[0]}</li>
  <li id='setCountValue2'  class = 'listCss'>${countingPsuedo[1]}</li>
  <li id='setCountValue3'  class = 'listCss'>${countingPsuedo[2]}</li>
  <li id='setCountValue4'  class = 'listCss'>${countingPsuedo[3]}</li>
  <li id='setCountValue5'  class = 'listCss'>${countingPsuedo[4]}</li>
  <li id='setCountValue6'  class = 'listCss'>${countingPsuedo[5]}</li>
  `;
  if (step) {
    console.log("count");
  }
  //disable the buttons
  disableCounting();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Set Counter to Zero`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    // exception handling to prevent user from entering null, no values or non numeral values
    if (!ConditionsValuesInput.value) {
      alert("Error! Please enter a value");
      await new Promise((resolve) =>
        setTimeout(() => {
          enableSumming();
          resolve();
        }, 2000)
      );
      return;
    }
    if (!isNumber(ConditionsValuesInput.value)) {
      alert("Error! please enter numbers only");
      // To wait for .5 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          enableSumming();
          resolve();
        }, 2000)
      );
      return;
    }
    blocks[i].style.backgroundColor = "#FF4949";
    codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `Traversing through array to find numbers greater than ${ConditionsValuesInput.value}`;
    document.getElementById("setCountValue2").style.backgroundColor = "white";

    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    if (currentArray[i] > ConditionsValuesInput.value) {
      // To change background-color of the
      // blocks to be compared
      document.getElementById("setCountValue3").style.backgroundColor =
        "#white";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      count++;
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `found a number Greater than ${ConditionsValuesInput.value} then add it to count total`;
      header.innerText = `The number of elements greater than ${ConditionsValuesInput.value} is: ${count}`;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 2000)
      );
      document.getElementById("setCountValue4").style.backgroundColor = "white";
    }

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2000)
    );
  }
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `end loop and return the tolal count of values greater than ${ConditionsValuesInput.value}`;
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue5").style.backgroundColor = "#white";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";
  //enabling the buttons once operation is complete
  enableCounting();
}
// function that loops through the array and finds Odd Numbers
async function CountOddNumber(delay = showVal()) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  // array that contains each step of the algorithm
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 !=0) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${countingPsuedo[0]}</li>
  <li id='setCountValue2'  class = 'listCss'>${countingPsuedo[1]}</li>
  <li id='setCountValue3'  class = 'listCss'>${countingPsuedo[2]}</li>
  <li id='setCountValue4'  class = 'listCss'>${countingPsuedo[3]}</li>
  <li id='setCountValue5'  class = 'listCss'>${countingPsuedo[4]}</li>
  <li id='setCountValue6'  class = 'listCss'>${countingPsuedo[5]}</li>
  `;
  if (step) {
    console.log("count");
  }
  //disable the buttons
  disableCounting();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Set Counter to Zero`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";
    // function to find values that do not return zero when divided by two
    // making them odd numbers
    codeExplaination.replaceChildren();

    codeExplaination.innerHTML += `Traversing through array to find odd numbers`;
    if (currentArray[i] % 2 != 0) {
      // To change background-color of the
      // blocks to be compared
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor =
        "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      // adding the number of even number with each iteration
      count++;
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `Odd number found! then add it to count total`;
      // returning the total count of even numbers
      header.innerText = `The number of Odd Numbers is: ${count}`;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 2000)
      );
      document.getElementById("setCountValue4").style.backgroundColor = "white";
    }

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `end loop and return total count of odd numbers`;
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enableCounting();
}
// function that loops through the array and finds Even Numbers
async function CountEvenNumber(delay = showVal()) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  // array that contains each step of the algorithm
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 ==0) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${countingPsuedo[0]}</li>
  <li id='setCountValue2'  class = 'listCss'>${countingPsuedo[1]}</li>
  <li id='setCountValue3'  class = 'listCss'>${countingPsuedo[2]}</li>
  <li id='setCountValue4'  class = 'listCss'>${countingPsuedo[3]}</li>
  <li id='setCountValue5'  class = 'listCss'>${countingPsuedo[4]}</li>
  <li id='setCountValue6'  class = 'listCss'>${countingPsuedo[5]}</li>
  `;
  if (step) {
    console.log("count");
  }
  //disable the buttons
  disableCounting();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Set Counter to Zero`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";

    // function to find values that return zero when divided by two
    // making them even numbers
    codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `Traversing through array to find even numbers`;
    document.getElementById("setCountValue1").style.backgroundColor = "white";
    // document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    if (currentArray[i] % 2 == 0) {
      // To change background-color of the
      // blocks to be compared
      document.getElementById("setCountValue3").style.backgroundColor =
        "#white";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      // adding the number of even number with each iteration
      count++;
      // returning the total count of even numbers
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `Found Even number then add it to count total`;
      header.innerText = `The total number of Even Numbers is: ${count}`;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 2000)
      );
      document.getElementById("setCountValue4").style.backgroundColor = "white";
    }

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren();

  codeExplaination.innerHTML += `end loop and return total count of even numbers`;
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enableCounting();
}

insertValuesBtn.addEventListener("click", function () {
  // clear the array if the elements are 20
  if (currentArray.length === 20) {
    clear();
  }
  let value = insertValuesInput.value;
  if (!isNumber(value)) {
    alert("Could not add! only enter numbers please ");
    return;
  } else {
    currentArray.push(value);
  }
  //Populating the array

  // Creating element div
  var array_ele = document.createElement("div");

  // Adding class 'block' to div
  array_ele.classList.add("block");

  // Adding style to div
  array_ele.style.height = `${value * 3}px`;
  array_ele.style.transform = `translate(${count * 30}px)`;

  // Creating label element for displaying
  // size of particular block
  var array_ele_label = document.createElement("label");
  array_ele_label.classList.add("block_id");
  array_ele_label.innerText = value;

  // Appending created elements to index.html
  array_ele.appendChild(array_ele_label);
  container.appendChild(array_ele);
  count++;
  insertValuesInput.value = "";
});

// function to disable buttons while the summing function runs
function disableSumming() {
  document.getElementById("LessValuesBtn").disabled = true;
  document.getElementById("LessValuesBtn").style.backgroundColor = "#d8b6ff";
  document.getElementById("GreaterValuesBtn").disabled = true;
  document.getElementById("GreaterValuesBtn").style.backgroundColor = "#d8b6ff";
  document.getElementById("OddValuesBtn").disabled = true;
  document.getElementById("OddValuesBtn").style.backgroundColor = "#d8b6ff";
  document.getElementById("EvenValuesBtn").disabled = true;
  document.getElementById("EvenValuesBtn").style.backgroundColor = "#d8b6ff";
}
// function to enable buttons after the summing function ends

function enableSumming() {
  document.getElementById("LessValuesBtn").disabled = false;
  document.getElementById("LessValuesBtn").style.backgroundColor = "#2c80ff";
  document.getElementById("GreaterValuesBtn").disabled = false;
  document.getElementById("GreaterValuesBtn").style.backgroundColor = "#2c80ff";
  document.getElementById("OddValuesBtn").disabled = false;
  document.getElementById("OddValuesBtn").style.backgroundColor = "#2c80ff";
  document.getElementById("EvenValuesBtn").disabled = false;
  document.getElementById("EvenValuesBtn").style.backgroundColor = "#2c80ff";
}
// function to disable buttons while the counting function runs

function disableCounting() {
  document.getElementById("LessValuesBtnn").disabled = true;
  document.getElementById("LessValuesBtnn").style.backgroundColor = "#d8b6ff";
  document.getElementById("GreaterValuesBtnn").disabled = true;
  document.getElementById("GreaterValuesBtnn").style.backgroundColor =
    "#d8b6ff";
  document.getElementById("OddValuesBtnn").disabled = true;
  document.getElementById("OddValuesBtnn").style.backgroundColor = "#d8b6ff";
  document.getElementById("EvenValuesBtnn").disabled = true;
  document.getElementById("EvenValuesBtnn").style.backgroundColor = "#d8b6ff";
}
// function to enable buttons after the counting function ends

function enableCounting() {
  document.getElementById("LessValuesBtnn").disabled = false;
  document.getElementById("LessValuesBtnn").style.backgroundColor = "#2c80ff";
  document.getElementById("GreaterValuesBtnn").disabled = false;
  document.getElementById("GreaterValuesBtnn").style.backgroundColor =
    "#2c80ff";
  document.getElementById("OddValuesBtnn").disabled = false;
  document.getElementById("OddValuesBtnn").style.backgroundColor = "#2c80ff";
  document.getElementById("EvenValuesBtnn").disabled = false;
  document.getElementById("EvenValuesBtnn").style.backgroundColor = "#2c80ff";
}

function disable() {}
// function to clear the array
function clear() {
  // clear the array and the container
  currentArray = [];
  container.innerHTML = "";
}
function enable() {}
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
// function to hide buttons that appear to run extra functions
function hideElements() {
  hideStuff = !hideStuff;
  if (hideStuff) {
    document.getElementById("hiddenDiv").style.display = "none";
  } else {
    document.getElementById("hiddenDiv").style.display = "flex";
  }
}
// function to hide buttons that appear to run extra functions on the counting algorithm page
function hideCountElements() {
  hideCount = !hideCount;
  if (hideCount) {
    document.getElementById("hiddenCountDiv").style.display = "none";
  } else {
    // document.getElementById("hiddenDiv").style.display = "none";
    document.getElementById("hiddenCountDiv").style.display = "flex";
  }
  console.log("count", hideCount);
}
hideElements();
hideCountElements();

// function to generate new random array
function generate() {
  window.location.reload();
}
function generateArray() {
  // Clear the array and the container
  clear();
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
  generateArray();
}

async function counting(delay = showVal()) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  // array that contains each step of the algorithm
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (< condition >) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${countingPsuedo[0]}</li>
  <li id='setCountValue2'  class = 'listCss'>${countingPsuedo[1]}</li>
  <li id='setCountValue3'  class = 'listCss'>${countingPsuedo[2]}</li>
  <li id='setCountValue4'  class = 'listCss'>${countingPsuedo[3]}</li>
  <li id='setCountValue5'  class = 'listCss'>${countingPsuedo[4]}</li>
  <li id='setCountValue6'  class = 'listCss'>${countingPsuedo[5]}</li>
  `;
  if (step) {
    console.log("count");
  }
  //disable the buttons
  disable();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);

  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    document.getElementById("setCountValue1").style.backgroundColor = "white";
    document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";
    // To change background-color of the
    // blocks to be compared
    // console.log('var i = 0; i < blocks.length; i += 1')
    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";
    blocks[i].style.backgroundColor = "#FF4949";
    count++;
    header.innerText = `The number of elements in the array is: ${count}`;

    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enable();
}
async function maximum(delay = showVal()) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  // array that contains each step of the algorithm
  let minimumPsuedo = [
    "max ← a[0]",
    "for i ← 0, a.length − 1 do",
    "if (a[i] > max) then",
    "max ← a[i]",
    "end if",
    "end for",
    "return max",
  ];
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1'  class = 'listCss'>${minimumPsuedo[0]}</li>
  <li id='setCountValue2' class = 'listCss'>${minimumPsuedo[1]}</li>
  <li id='setCountValue3'  class = 'listCss'>${minimumPsuedo[2]}</li>
  <li id='setCountValue4'  class = 'listCss'>${minimumPsuedo[3]}</li>
  <li id='setCountValue5'  class = 'listCss'>${minimumPsuedo[4]}</li>
  <li id='setCountValue6'  class = 'listCss'>${minimumPsuedo[5]}</li>
  <li id='setCountValue7'  class = 'listCss'>${minimumPsuedo[6]}</li>`;
  header.replaceChildren();
  header.innerHTML += "Maximum Algorithm";
  //disable the buttons
  disable();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  var btnsArr = Array.prototype.slice.call(blocks);
  console.log(btnsArr[4]);
  reset(blocks);
  codeExplaination.replaceChildren();
  //Setting the first element as the maximum
  codeExplaination.innerHTML += `Setting the first element as the maximum`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );

  console.log("step1");
  let max = Number(blocks[0].childNodes[0].innerHTML);

  blocks[0].style.backgroundColor = "#13CE66";

  for (var i = 1; i < blocks.length; i += 1) {
    document.getElementById("setCountValue1").style.backgroundColor = "white";
    document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

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

    // document.getElementById("setCountValue2").style.backgroundColor = "white";
    // document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    codeExplaination.replaceChildren();

    codeExplaination.innerHTML += `Traverse through array to find greater values`;
    // if the previous maximum is less than the current value being evaluated
    // then the current value is set as the new max
    if (max < cuurentValue) {
      const oldMax = blocks[i];

      console.log("step3");
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor =
        "#d8b6ff";
      codeExplaination.replaceChildren();

      codeExplaination.innerHTML +=
        "if the current value is greater than the current max value, then set it as new Max value";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 3000)
      );
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `swap old max value: ${max} with the current value: ${cuurentValue}`;
      // previous max is replaced with current value
      max = cuurentValue;

      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      console.log("step4");
      document.getElementById("setCountValue3").style.backgroundColor = "white";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 3000)
      );
      // display message
      blocks[i].style.backgroundColor = "#FF4949";

      header.innerText = `The new maximum value is: ${max} at index ${index}`;
      blocks[index].style.backgroundColor = "#13CE66";

      console.log("end");
    }

    // document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue4").style.backgroundColor = "white";

    document.getElementById("setCountValue5").style.backgroundColor = "white";
  }
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Return the maximum value`;
  enable();
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue6").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  header.replaceChildren();
  header.innerText = `The final maximum value is: ${max} at index ${index}`;
  document.getElementById("setCountValue7").style.backgroundColor = "#d8b6ff";
}

async function minimum(delay = showVal()) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Minimum Algorithm";
  // array that contains each step of the algorithm
  let minimumPsuedo = [
    "min ← a[0]",
    "for i ← 0, a.length − 1 do",
    "if (a[i] < min) then",
    "min ← a[i]",
    "end if",
    "end for",
    "return min",
  ];
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1'  class = 'listCss'>${minimumPsuedo[0]}</li>
  <li id='setCountValue2'  class = 'listCss'>${minimumPsuedo[1]}</li>
  <li id='setCountValue3'  class = 'listCss'>${minimumPsuedo[2]}</li>
  <li id='setCountValue4'  class = 'listCss'>${minimumPsuedo[3]}</li>
  <li id='setCountValue5'  class = 'listCss'>${minimumPsuedo[4]}</li>
  <li id='setCountValue6'  class = 'listCss'>${minimumPsuedo[5]}</li>
  <li id='setCountValue7'  class = 'listCss'>${minimumPsuedo[6]}</li>
  `;
  disable();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  reset(blocks);
  codeExplaination.replaceChildren();
  //Setting the first element as the minimum
  codeExplaination.innerHTML += `Setting the first element as the minimum`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  let min = Number(blocks[0].childNodes[0].innerHTML);
  blocks[0].style.backgroundColor = "#13CE66";

  for (var i = 1; i < blocks.length; i += 1) {
    document.getElementById("setCountValue1").style.backgroundColor = "white";
    document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";
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
    // document.getElementById("setCountValue2").style.backgroundColor = "white";
    // document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `Traverse through array to find smaller values`;
    // function to find out if the current minimum value is less than the current value being evaluated
    if (min > cuurentValue) {
      // if the current value less than the previous minimum,

      blocks[i].style.backgroundColor = "#13CE66";
      // display message
      document.getElementById("setCountValue3").style.backgroundColor = "white";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      codeExplaination.replaceChildren();

      codeExplaination.innerHTML +=
        "if the current value is less than the current Min value, then set it as new Min value";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 3000)
      );
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `swap old minimum value: ${min} with the current value: ${cuurentValue}`;

      // the current value is set as the new minimum value
      min = cuurentValue;
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      document.getElementById("setCountValue3").style.backgroundColor = "white";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 3000)
      );
      blocks[i].style.backgroundColor = "#FF4949";

      header.innerText = `The new maximum value is: ${min} at index ${index}`;
      blocks[index].style.backgroundColor = "#13CE66";
    }
    document.getElementById("setCountValue4").style.backgroundColor = "white";

    document.getElementById("setCountValue5").style.backgroundColor = "white";
  }
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Return the minimum value`;
  enable();
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue6").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  header.replaceChildren();
  header.innerText = `The final minimum value is: ${min} at index ${index}`;
  document.getElementById("setCountValue7").style.backgroundColor = "#d8b6ff"
}
// a function to sum up the total number of even numbers
async function summingEvenNumbers(delay = showVal()) {
  console.log(delay);
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  // array that contains each step of the algorithm
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 === 0) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s",
  ];
  // setting each algorithm line to a list item in the index.html file

  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  disableSumming();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Set Sum to Zero`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  //Setting the count to 0
  let sum = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";
    // function to find values that return zero when divided by two
    // making them even numbers
    codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `Traversing through array to find even numbers`;
    document.getElementById("setCountValue1").style.backgroundColor = "white";
    document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue3").style.backgroundColor = "white";
    if (currentArray[i] % 2 === 0) {
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      // document.getElementById("setCountValue3").style.backgroundColor =
      //   "#white";
      document.getElementById("setCountValue3").style.backgroundColor =
        "#d8b6ff";
      // To change background-color of the
      // blocks to be compared
      blocks[i].style.backgroundColor = "#13CE66";

      codeExplaination.replaceChildren();

      codeExplaination.innerHTML +=
        "if the current value is divisible by 2, then add it to current sum";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 3000)
      );
      document.getElementById("setCountValue3").style.backgroundColor =
        "#white";
      // summing the total number of even numbers
      // sum += sum + currentArray[i]
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `Even number added to sum`;
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      sum = sum + currentArray[i];

      header.innerText = `The the new sum of even numbers is: ${sum}`;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 2000)
      );
    }
    document.getElementById("setCountValue4").style.backgroundColor = "white";
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `return sum of even numbers`;
  document.getElementById("setCountValue2").style.backgroundColor = "white";
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  document.getElementById("setCountValue5").style.backgroundColor = "#white";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enableSumming();
}
async function summingOddNumbers(delay = showVal()) {
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  // array that contains each step of the algorithm
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 !=0) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s",
  ];
  // setting each algorithm line to a list item in the index.html file

  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  disableSumming();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  //Setting the count to 0
  let sum = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";
    // function to find values that do not return zero when divided by two
    // making them odd numbers
    if (currentArray[i] % 2 != 0) {
      codeExplaination.replaceChildren();

      codeExplaination.innerHTML += `Traversing through array to find odd numbers`;
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor =
        "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";

      // To change background-color of the
      // blocks to be compared
      blocks[i].style.backgroundColor = "#13CE66";
      // summing up the total number of odd numbers
      sum = sum + Number(currentArray[i]);
      // sum += sum + currentArray[i]
      header.innerText = `The sum of odd numbers is: ${sum}`;
    }
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `return sum of odd numbers`;
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enableSumming();
}

async function summingGreaterThan(delay = showVal()) {
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  // array that contains each step of the algorithm
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] > s) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s",
  ];
  // setting each algorithm line to a list item in the index.html file

  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  disableSumming();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  //Setting the count to 0
  let sum = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    // preventing user from entering null or non numeral values
    if (!conditionValue.value) {
      alert("Error! Please enter a value");
      await new Promise((resolve) =>
        setTimeout(() => {
          enableSumming();
          resolve();
        }, 2000)
      );
      return;
    }
    if (!isNumber(conditionValue.value)) {
      alert("Error! please enter numbers only");
      // To wait for .5 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          enableSumming();
          resolve();
        }, 2000)
      );
      return;
    }
    blocks[i].style.backgroundColor = "#FF4949";
    // looping through array to find value greater than the value entered by user
    if (currentArray[i] > conditionValue.value) {
      codeExplaination.replaceChildren();

      codeExplaination.innerHTML += `Traversing through array to find numbers greater than ${conditionValue.value}`;
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor =
        "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";

      // To change background-color of the
      // blocks to be compared
      blocks[i].style.backgroundColor = "#13CE66";
      // summing up the total number of array values which are greater than the value entered by user
      sum = sum + Number(currentArray[i]);
      // sum += sum + currentArray[i]
      header.innerText = `The sum of numbers greater than ${conditionValue.value} is: ${sum}`;
    }
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren();

  codeExplaination.innerHTML += `return the sum numbers greater than ${conditionValue.value}`;
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enableSumming();
}
async function summingLessThan(delay = showVal()) {
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  // array that contains each step of the algorithm
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] < s) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s",
  ];
  // setting each algorithm line to a list item in the index.html file

  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  disableSumming();
  //selecting all the blocks on the graph
  var blocks = document.querySelectorAll(".block");
  //reset the blocks to the default color
  reset(blocks);
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  //Setting the count to 0
  let sum = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    if (!conditionValue.value) {
      // preventing user from entering null or non numeral values
      alert("Error! Please enter a value");
      await new Promise((resolve) =>
        setTimeout(() => {
          enableSumming();
          resolve();
        }, 2000)
      );
      return;
    }
    if (!isNumber(conditionValue.value)) {
      alert("Error! please enter numbers only");
      // To wait for .5 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          enableSumming();
          resolve();
        }, 2000)
      );
      return;
    }
    blocks[i].style.backgroundColor = "#FF4949";
    // looping through array to find value less than the value entered by user
    if (currentArray[i] < conditionValue.value) {
      codeExplaination.replaceChildren();

      codeExplaination.innerHTML += `Traversing through array to find numbers less than ${conditionValue.value}`;
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor =
        "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";

      // To change background-color of the
      // blocks to be compared
      blocks[i].style.backgroundColor = "#13CE66";
      // summing up the total number of array values which are less than the value entered by user
      sum = sum + Number(currentArray[i]);
      // sum += sum + currentArray[i]
      header.innerText = `The sum of numbers less than ${conditionValue.value} is: ${sum}`;
    }
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren();

  codeExplaination.innerHTML += `return the sum of numbers less than ${conditionValue.value}`;
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enableSumming();
}

function searching(number) {
  hideInvisibleDiv();

  for (let index = 0; index < currentArray.length; index++) {
    if (number === currentArray[index]) {
      header.innerText = `Number found at index: ${index}`;
      return;
    } else {
      header.innerText = `The number ${number} was not found in the array`;
    }
  }
}

async function searchAlgorithm(delay = showVal()) {
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Searching Algorithm";
  // array that contains each step of the algorithm
  let pseudo = [
    "for i ← 0, a.length − 1 do",
    "if (a[i] == e) then",
    "return true",
    "end if",
    "end for",
    "return false",
  ];
  pseudo.push("for i ← 0, a.length − 1 do");
  // setting each algorithm line to a list item in the index.html file
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${pseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss'>${pseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${pseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${pseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${pseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${pseudo[5]}</li>
  `;

  disable();
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
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
    // values in array
    var values = Number(blocks[i].childNodes[0].innerHTML);
    // variable to store index where found value is stored
    var index = blocks.length - (blocks.length - i);
    // if statement to compare values in array to value to find
    codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `Traverse through array to find matching value`;
    const step2 = true;
    if (step2) {
    }
    document.getElementById("setCountValue1").style.backgroundColor = "white";
    document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";
    if (values == arrInput) {
      header.replaceChildren();
      console.log("value found");
      header.innerText = "3 return true";
      blocks[i].style.backgroundColor = "#13CE66";
      // display message
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor =
        "#d8b6ff";
      // document.getElementById("setCountValue3").style.backgroundColor = "white";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor = "white";
      document.getElementById("setCountValue5").style.backgroundColor =
        "#d8b6ff";
      // document.getElementById("test2").style.backgroundColor = "white";

      header.innerText = `Number ${arrInput} found at index: ${index}`;
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `value found! return True`;
      enable();
      // codeExplaination.replaceChildren();
      // codeExplaination.innerHTML += `end foo loop`
      return;
    }
  }
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `if value is not found, return false`;
  header.innerText = `The number ${arrInput} was not found in the array`;
  document.getElementById("setCountValue5").style.backgroundColor = "white";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";
  enable();
}
