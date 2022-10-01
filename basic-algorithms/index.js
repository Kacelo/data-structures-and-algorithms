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
const invisibleDiv = document.getElementById("extraOperations")
// const lessThanBtn = document.getElementById("LessValuesBtn");
// const greaterThanBtn = document.getElementById("GreaterValuesBtn");
// const oddValuesBtn = document.getElementById("oddValuesBtn");
let hideStuff = false;
let hideCount = false;

function hideInvisibleDiv(){
  if(invisibleDiv){
    invisibleDiv.style.display = "none";
  }
} 
const conditionValue = document.getElementById("ConditionsValuesInput")
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
function showVal(){
  //  customRange1 = document.getElementById("customRange1");

  console.log("in index",customRange1.value)
  return customRange1.value;
// document.getElementById("valBox").innerHTML=newVal;
}



function getNewSliderValue () {
  return setTimeout(()=>{
    customRange1.value
  }, customRange1.value)
}

console.log(customRange1.value)
function reset(blocks) {
  for (let index = 0; index < blocks.length; index++) {
    blocks[index].style.backgroundColor = "#6b5b95";
  }
}


//Conditional check functions

async function ShowsLessThan(delay = 500) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i]< c) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
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
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";

  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";

    if(currentArray[i]< ConditionsValuesInput.value){
      codeExplaination.replaceChildren()
      codeExplaination.innerHTML += `Traversing through array to find numbers less than ${ConditionsValuesInput.value}`
      // To change background-color of the
      // blocks to be compared
      // console.log('var i = 0; i < blocks.length; i += 1')
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      count++;
      header.innerText = `The number of elements less than ${ConditionsValuesInput.value} is: ${count}`;
  
    }
   
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
async function ShowsGreaterThan(delay = 500) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i]> c) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
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
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";

  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";

    if(currentArray[i]> ConditionsValuesInput.value){
      codeExplaination.replaceChildren()

      codeExplaination.innerHTML += `Traversing through array to find numbers greater than ${ConditionsValuesInput.value}`
      // To change background-color of the
      // blocks to be compared
      // console.log('var i = 0; i < blocks.length; i += 1')
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      count++;
      header.innerText = `The number of elements greater than ${ConditionsValuesInput.value} is: ${count}`;
    }
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren()
  codeExplaination.innerHTML += `return the tolal number of values greater than ${ConditionsValuesInput.value}`
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";
  //enabling the buttons once operation is complete
  enable();
}

async function ShowsOddNumber(delay = 500) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 !=0) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
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
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";

  //Setting the count to 0
  let count = 0;
  document.getElementById("setCountValue1").style.backgroundColor = "white";
      document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";

    if(currentArray[i] % 2 !=0 ){
      codeExplaination.replaceChildren()

    codeExplaination.innerHTML += `Traversing through array to find odd numbers`
      // To change background-color of the
      // blocks to be compared
      // console.log('var i = 0; i < blocks.length; i += 1')
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      count++;
      header.innerText = `The number of Odd Numbers is: ${count}`;
  
    }
   
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren()
  codeExplaination.innerHTML += `return total number of odd numbers`
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enable();
}

async function ShowsEvenNumber(delay = 500) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 ==0) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
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
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";

  //Setting the count to 0
  let count = 0;

  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";

    if(currentArray[i] % 2 ==0 ){
      codeExplaination.replaceChildren()
      codeExplaination.innerHTML += `Traversing through array to find even numbers`
      document.getElementById("setCountValue1").style.backgroundColor = "white";
      document.getElementById("setCountValue2").style.backgroundColor = "#d8b6ff";
      // To change background-color of the
      // blocks to be compared
      // console.log('var i = 0; i < blocks.length; i += 1')
      document.getElementById("setCountValue2").style.backgroundColor = "white";
      document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
      document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";
      blocks[i].style.backgroundColor = "#13CE66";
      count++;
      header.innerText = `The total number of Even Numbers is: ${count}`;
  
    }
   
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren()

  codeExplaination.innerHTML += `return total number of even numbers`
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enable();
}




insertValuesBtn.addEventListener("click", function () {
  // clear the array if the elements are 20
  if (currentArray.length === 20) {
    clear();
  }
  let value = insertValuesInput.value;
  //Populating the array
  currentArray.push(value);

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


function disable() {
  // To disable the button "Generate New Array"
  // document.getElementById("generteButton").disabled = true;
  // document.getElementById("generteButton").style.backgroundColor = "#d8b6ff";
  // // To disable the button "counting"
  // document.getElementById("countingButton").disabled = true;
  // document.getElementById("countingButton").style.backgroundColor = "#d8b6ff";
  // // To disable the button "minimum"
  // document.getElementById("minimumButton").disabled = true;
  // document.getElementById("minimumButton").style.backgroundColor = "#d8b6ff";
  // // To disable the button "maximum"
  // document.getElementById("maximumButton").disabled = true;
  // document.getElementById("maximumButton").style.backgroundColor = "#d8b6ff";
  // // To disable the button "summing"
  // document.getElementById("summingButton").disabled = true;
  // document.getElementById("summingButton").style.backgroundColor = "#d8b6ff";
  // // to disable the button "searching"
  // document.getElementById("search").disabled = true;
  // document.getElementById("search").style.backgroundColor = "#d8b6ff";
}
function clear() {
  // clear the array and the container
  currentArray = [];
  container.innerHTML = "";
}
function enable() {
  // // To enable the button "Generate New Array"
  // document.getElementById("generteButton").disabled = false;
  // document.getElementById("generteButton").style.backgroundColor = "#6b5b95";
  // // To enable the button "counting"
  // document.getElementById("countingButton").disabled = false;
  // document.getElementById("countingButton").style.backgroundColor = "#6b5b95";
  // // To enable the button "minimum"
  // document.getElementById("minimumButton").disabled = false;
  // document.getElementById("minimumButton").style.backgroundColor = "#6b5b95";
  // // To enable the button "maximum"
  // document.getElementById("maximumButton").disabled = false;
  // document.getElementById("maximumButton").style.backgroundColor = "#6b5b95";
  // // To enable the button "summing"
  // document.getElementById("summingButton").disabled = false;
  // document.getElementById("summingButton").style.backgroundColor = "#6b5b95";
  // // to enable the button "searching"
  // document.getElementById("search").disabled = false;
  // document.getElementById("search").style.backgroundColor = "#6b5b95";
}
function hideElements(){
  hideStuff = !hideStuff;
  if(hideStuff){
    document.getElementById( 'hiddenDiv' ).style.display = 'none';
  }
  else{
    document.getElementById( 'hiddenCountDiv' ).style.display = 'none';
    document.getElementById( 'hiddenDiv' ).style.display = 'flex';
  }
  console.log(hideStuff)
}
function hideCountElements(){
  hideCount = !hideCount;
  if(hideCount){
    document.getElementById( 'hiddenCountDiv' ).style.display = 'none';
  }
  else{
    document.getElementById( 'hiddenDiv' ).style.display = 'none';
    document.getElementById( 'hiddenCountDiv' ).style.display = 'flex';
  }
  console.log("count",hideCount)  
}
hideElements()
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
  console.log("show",showVal())
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Counting Algorithm";
  const step = true;
  let countingPsuedo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (< condition >) then",
    "c ← c + 1",
    " end i",
    "end for",
    "return c",
  ];
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
  let minimumPsuedo = [
    "max ← a[0]",
    "for i ← 0, a.length − 1 do",
    "if (a[i] > max) then",
    "max ← a[i]",
    "end if",
    "end for",
    "return max",
  ];
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
  reset(blocks);

  

  //Setting the first element as the minimum
  codeExplaination.innerHTML += `Setting the first element as the maximum`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
  console.log("step1")
  let max = Number(blocks[0].childNodes[0].innerHTML);

  blocks[0].style.backgroundColor = "#13CE66";

  for (var i = 1; i < blocks.length; i += 1) {
    console.log("step 2")
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
    codeExplaination.innerHTML +="if the minimum is greater than the current value set the minimum to the current value"
    // document.getElementById("setCountValue2").style.backgroundColor = "white";
    // document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    codeExplaination.replaceChildren();

    codeExplaination.innerHTML += `Traverse through array to find greater values`
    if (max < cuurentValue) {
      console.log("step3")
      document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
     
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `swap old max value: ${max} with the current value: ${cuurentValue}`;
     
      
      max = cuurentValue;
      document.getElementById("setCountValue4").style.backgroundColor =
      "#d8b6ff";
      console.log("step4")
       document.getElementById("setCountValue3").style.backgroundColor = "white";
      

      blocks[i].style.backgroundColor = "#13CE66";
      
      
      document.getElementById("setCountValue5").style.backgroundColor =
        "#d8b6ff";

      // display message
      
      header.innerText = `The maximum value is: ${max} at index ${index}`;
      console.log("end")

    }
    document.getElementById("setCountValue4").style.backgroundColor =
    "white";

    document.getElementById("setCountValue5").style.backgroundColor = "white";
    document.getElementById("setCountValue6").style.backgroundColor =
      "#d8b6ff";
    
    console.log(
      "if the minimum is greater than the current value set the minimum to the current value"
    );
  }
  

      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `Return the maximum value`
  enable();
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue6").style.backgroundColor = "white";
  document.getElementById("setCountValue2").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";

  document.getElementById("setCountValue7").style.backgroundColor = "#d8b6ff";
}

async function minimum(delay = showVal()) {
  setCountValue.replaceChildren();
  header.replaceChildren();
  header.innerHTML += "Minimum Algorithm";
  let minimumPsuedo = [
    "min ← a[0]",
    "for i ← 0, a.length − 1 do",
    "if (a[i] < min) then",
    "min ← a[i]",
    "end if",
    "end for",
    "return min",
  ];
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

  //Setting the first element as the minimum
  codeExplaination.innerHTML += `Setting the first element as the minimum`;
  document.getElementById("setCountValue1").style.backgroundColor = "#d8b6ff";
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
    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    codeExplaination.replaceChildren()
    codeExplaination.innerHTML += `Traverse through array to find smaller values`
    if (min > cuurentValue) {
      codeExplaination.replaceChildren();
      codeExplaination.innerHTML += `swap old minimum value: ${min} with the current value: ${cuurentValue}`;
      min = cuurentValue;
      blocks[i].style.backgroundColor = "#13CE66";
      // display message
      document.getElementById("setCountValue3").style.backgroundColor = "white";
      document.getElementById("setCountValue4").style.backgroundColor =
        "#d8b6ff";
      header.innerText = `The minimum value is: ${min} at index ${index}`;
      document.getElementById("setCountValue4").style.backgroundColor = "white";
      document.getElementById("setCountValue5").style.backgroundColor =
        "#d8b6ff";
      document.getElementById("setCountValue5").style.backgroundColor = "white";
      document.getElementById("setCountValue6").style.backgroundColor =
        "#d8b6ff";
    }

  }
  codeExplaination.replaceChildren();
  codeExplaination.innerHTML += `Return the minimum value`
  enable();
  document.getElementById("setCountValue6").style.backgroundColor = "white";
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue7").style.backgroundColor = "#d8b6ff";
}
async function summingEvenNumbers(delay = showVal()) {
  console.log(delay)
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 === 0) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s",
  ];
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  // disable();
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

    if(currentArray[i] % 2 === 0){
      codeExplaination.replaceChildren()
      codeExplaination.innerHTML += `Traversing through array to find even numbers`

    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";

    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#13CE66";
    sum = sum+ currentArray[i];
    // sum += sum + currentArray[i]
    header.innerText = `The sum of even numbers is: ${sum}`;
    }
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren()

    codeExplaination.innerHTML += `return sum of even numbers`
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enable();
}
async function summingOddNumbers(delay = showVal()) {
 

  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] % 2 !=0) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s"
  ];
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  // disable();
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

    if(currentArray[i] % 2 !=0){
      codeExplaination.replaceChildren()

    codeExplaination.innerHTML += `Traversing through array to find odd numbers`
    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";

    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#13CE66";
    sum = sum+ Number(currentArray[i]);
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
  codeExplaination.replaceChildren()
  codeExplaination.innerHTML += `return sum of odd numbers`
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enable();
}

async function summingGreaterThan(delay = showVal()) {
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] > s) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s"
  ];
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  // disable();
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

    if(currentArray[i] > conditionValue.value ){

      codeExplaination.replaceChildren()

      codeExplaination.innerHTML += `Traversing through array to find numbers greater than ${conditionValue.value}`
    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";

    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#13CE66";

    sum = sum+ Number(currentArray[i]);
    // sum += sum + currentArray[i]
    header.innerText = `The sum of numbers greater than ${ conditionValue.value} is: ${sum}`;
    }
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren()

  codeExplaination.innerHTML += `return the sum numbers greater than ${conditionValue.value}`
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enable();
}
async function summingLessThan(delay = showVal()) {
  header.replaceChildren();
  setCountValue.replaceChildren();
  header.innerHTML += "Summing Algorithm";
  let summingPseudo = [
    "c ← 0",
    "for i ← 0, a.length − 1 do",
    "if (a[i] < s) then",
    "s ← s + a[i]",
    " end i",
    "end for",
    "return s"
  ];
  setCountValue.innerHTML += `
  <li id='setCountValue1' class = 'listCss'>${summingPseudo[0]}</li>
  <li id='setCountValue2' class = 'listCss' >${summingPseudo[1]}</li>
  <li id='setCountValue3' class = 'listCss'>${summingPseudo[2]}</li>
  <li id='setCountValue4' class = 'listCss'>${summingPseudo[3]}</li>
  <li id='setCountValue5' class = 'listCss'>${summingPseudo[4]}</li>
  <li id='setCountValue6' class = 'listCss'>${summingPseudo[5]}</li>
  `;
  //disable the buttons
  // disable();
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

    if(currentArray[i] < conditionValue.value ){

      codeExplaination.replaceChildren()

      codeExplaination.innerHTML += `Traversing through array to find numbers less than ${conditionValue.value}`
    document.getElementById("setCountValue2").style.backgroundColor = "white";
    document.getElementById("setCountValue3").style.backgroundColor = "#d8b6ff";
    document.getElementById("setCountValue4").style.backgroundColor = "#d8b6ff";

    // To change background-color of the
    // blocks to be compared
    blocks[i].style.backgroundColor = "#13CE66";

    sum = sum+ Number(currentArray[i]);
    // sum += sum + currentArray[i]
    header.innerText = `The sum of numbers less than ${ conditionValue.value} is: ${sum}`;
    }
    // To wait for .5 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  codeExplaination.replaceChildren()

  codeExplaination.innerHTML += `return the sum of numbers less than ${conditionValue.value}`
  document.getElementById("setCountValue3").style.backgroundColor = "white";
  document.getElementById("setCountValue4").style.backgroundColor = "white";
  document.getElementById("setCountValue5").style.backgroundColor = "#d8b6ff";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";

  //enabling the buttons once operation is complete
  enable();
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
  let pseudo = [
    "for i ← 0, a.length − 1 do",
    "if (a[i] == e) then",
    "return true",
    "end if",
    "end for",
    "return false",
  ];
  pseudo.push("for i ← 0, a.length − 1 do");
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
    console.log(arrInput);
    console.log(Number(blocks[i].childNodes[0].innerHTML));
    // values in array
    var values = Number(blocks[i].childNodes[0].innerHTML);
    // variable to store index where found value is stored
    var index = blocks.length - (blocks.length - i);
    // if statement to compare values in array to value to find
    codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `Traverse through array to find matching value`
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
    codeExplaination.innerHTML += `value found! return True`
      enable();
      // codeExplaination.replaceChildren();
    // codeExplaination.innerHTML += `end foo loop`
      return;
    }
  }
  codeExplaination.replaceChildren();
    codeExplaination.innerHTML += `if value is not found, return false`
  header.innerText = `The number ${arrInput} was not found in the array`;
  document.getElementById("setCountValue5").style.backgroundColor = "white";
  document.getElementById("setCountValue6").style.backgroundColor = "#d8b6ff";
  enable();
}
