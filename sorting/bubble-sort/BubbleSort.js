var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
  for (var i = 0; i < 20; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var value = Math.ceil(Math.random() * 100);

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

// Promise to swap two blocks
function swap(el1, el2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // For waiting for .25 sec
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
  var blocks = document.querySelectorAll(".block");

  // BubbleSort Algorithm
  for (var i = 0; i < blocks.length; i += 1) {
    for (var j = 0; j < blocks.length - i - 1; j += 1) {
      // To change background-color of the
      // blocks to be compared
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      console.log("run");
      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      // To compare value of two blocks
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }

      // Changing the color to the previous one
      blocks[j].style.backgroundColor = "#6b5b95";
      blocks[j + 1].style.backgroundColor = "#6b5b95";
    }

    //changing the color of greatest element
    //found in the above traversal
    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
}

let btnSort = document.getElementById("bubble-sort-btn");

btnSort.addEventListener("click", () => {
  // Calling BubbleSort function
  BubbleSort();
  disable();

  var heading = document.getElementById("header");
  heading.innerHTML=
     `Bubble Sort`;
});

generatearray();

// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 600) {
  let blocks = document.querySelectorAll(".block");

  // Provide lightgreen colour to 0th bar
  blocks[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < blocks.length; i += 1) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(blocks[i].childNodes[0].innerHTML);
    console.log(key);
    // To store the ith bar height to height
    var height = blocks[i].style.height;

    // For selecting section having id "block"
    var barval = document.getElementById("block");
    var type = document.getElementById("heading");
    // For dynamically Updating the selected element
    // barval.innerHTML=
    // `<h3>Element Selected is :${key}</h3>`;

    //Provide darkblue color to the ith bar
    blocks[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {
      // Provide darkblue color to the jth bar
      blocks[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        blocks[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    // Placing the selected element to its correct position
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // Provide light green color to the ith bar
    blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
  }


  barval.innerHTML = "<h3>Sorted!!!</h3>";

  // To enable the button
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
 
}

let insertionBtn = document.getElementById("Button2");

insertionBtn.addEventListener("click", () => {
  InsertionSort();
  disable();
 var heading = document.getElementById("header");
 heading.innerHTML=
    `Selection Sort`;
 
//   type.innerHTML = '<h3>Insertion Sort</h3>'
});

function generate() {
  window.location.reload();
}

//   // Call "generatebars()" function
//   generatebars();

//   // Function to generate new random array
//   function generate()
//   {
//     window.location.reload();
//   }

// Function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1");
  // .disabled = true;
  document.getElementById("Button1");
  // .style.backgroundColor = "#d8b6ff";

  // To disable the button "Insertion Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
  document.getElementById("bubble-sort-btn").disabled = true;
  document.getElementById("bubble-sort-btn").style.backgroundColor = "#d8b6ff";
}
