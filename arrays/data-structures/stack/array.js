let elements = ['sample ', 'Sample'];
//maximum number of elements in the stack
let limit = 5;
// buttons
const btnPush = document.getElementById('push-button');
const arrInput = document.getElementById('array-input');
const btnPop = document.getElementById('pop-button');
const btnPeek = document.getElementById('peek-button');

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
function addElements() {
	// mapping through stack and displaying contents into a list item
	let contents = elements
		.map((content) => {
			return `<li><div class='box'>${content}, index: ${viewID(
				content
			)}</div></li>`;
		})
		.join('\n');
	document.querySelector('ul').innerHTML = contents;
}

// function to display element index according to stack content
// with use of indexOf() function.
function viewID(id) {
	let index = elements.indexOf(id);

	return index;
}

// to display stack elements
addElements();

// event listeners
btnPop.addEventListener('click', async () => {
	if (!isEmpty()) {
		disableButton(btnPop);
		//enable push button
		enableButton(btnPush);
		elements.pop();

		//wait for .5 sec before enabling the pop button and adding the element to the stack
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
				addElements();
				if (isEmpty()) disableButton(btnPop);
			}, 500)
		);
		enableButton(btnPop);
	}
});

// Check the last element of the stack
btnPeek.addEventListener('click', () => {
	if (isEmpty()) {
		return;
	}
	const lastElement = elements[elements.length - 1];
	alert('Peek value is: ' + lastElement);
	// return lastElement;
});

btnPush.addEventListener('click', async () => {
	const value = arrInput.value;
	const lastElement = elements[elements.length - 1];

	if (!isEmpty()) {
		//check if there is a mismatch in type between the last element and the new element
		if (
			(isNumber(value) && isString(lastElement)) ||
			(isNumber(lastElement) && isString(value))
		) {
			if (isNumber(value)) {
				alert('Only enter strings please ');
				return;
			} else {
				alert('Only enter numbers please ');
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
		} //push entered value into the array
		elements.push(arrInput.value);
		arrInput.value = '';

		//wait for .5 sec before enabling the pop button and adding the element to the stack
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
				addElements();
				if (!isFull()) enableButton(btnPush);
			}, 500)
		);
	}
});

//disable any button by passing the button as an argument
function disableButton(button) {
	button.disabled = true;
	button.style.backgroundColor = '#d8b6ff';
}

//enable any button by passing the button as an argument
function enableButton(button) {
	button.disabled = false;
	button.style.backgroundColor = '#6f459e';
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
