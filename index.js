// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA() {
    const candidates = document.getElementsByTagName('span');
    let output = null;
    for (let tag of candidates) {
        if (tag.innerText === 'USA') {
            output = tag.innerText;
            break;
        }
    }
    console.log(output);
}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    const candidates = document.getElementsByTagName('tr');
    for (let tag of candidates) {
        if (tag.innerText.match(/.*Sales.*/)) {
            console.log(tag.childNodes[1].innerText);
        }
    }
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    const candidates = document.querySelectorAll('a > span');
    for (let tag of candidates) {
        console.log(tag.innerText);
    }
}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
    const select = document.getElementsByName('skills')[0];
    const candidates = select.querySelectorAll('[selected="selected"]');
    for (let node of candidates) {
        console.log(node.innerText);
    }
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

function getCustomAttribute() {
    const candidates = document.querySelectorAll('[data-customAttr]');
    for (let node of candidates) {
        let attr = node.getAttribute('data-customAttr');
        console.log(attr);
        console.log(node);
    }
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  

function unobtrusiveSum() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    sum = document.getElementById('sum');
    sum.innerText = 0;
    num1.value = '';
    num2.value = '';
    
    num1.onkeyup = () => {
        if (isNaN(parseInt(num1.value))) {
            num1.value = '';
            if (!isNaN(parseInt(num2.value)) || num2.value === '') {
                sum.innerText = 0 + parseInt(num1.value);
            } else {
                sum.innerText = 0;
            }
        } else {
            if (!isNaN(parseInt(num2.value))) {
                sum.innerText = parseInt(num1.value) + parseInt(num2.value);
            } else if (isNaN(parseInt(num2.value))) {
                sum.innerText = parseInt(num1.value) + 0;
            }
        }
    }
    
    num2.onkeyup = () => {
        if (isNaN(parseInt(num2.value))) {
            num2.value = '';
            if (!isNaN(parseInt(num1.value)) || num1.value === '') {
                sum.innerText = 0 + parseInt(num2.value);
            } else {
                sum.innerText = 0;
            }
        } else {
            if (!isNaN(parseInt(num1.value))) {
                sum.innerText = parseInt(num1.value) + parseInt(num2.value);
            } else if (isNaN(parseInt(num1.value))) {
                sum.innerText = parseInt(num2.value) + 0;
            }
        }
    }
}

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

function unobtrusiveHandler() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    sum = document.getElementById('sum');
    sum.innerText = 0;
    num1.value = '';
    num2.value = '';
    const message = () => sum.innerText = 'Cannot add';
    const setSum = () => sum.innerText = parseInt(num1.value) + parseInt(num2.value);
    
    num1.onchange = () => {
        if (isNaN(parseInt(parseInt(num1.value) + parseInt(num2.value)))) {
            message();
        } else {
            setSum();
        }
    }

    num2.onchange = () => {
        if (isNaN(parseInt(parseInt(num1.value) + parseInt(num2.value)))) {
            message();
        } else {
            setSum();
        }
    }
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

function favColor() {
    let value = null;

    let colors = document.getElementsByName('favoriteColor');
    
    for (let color of colors) {
        color.addEventListener('click', () => {
            let body = document.getElementsByTagName('body')[0];
            body.bgColor = color.value;
            if (value === null) {
                alert(`${color.value} is a fine selection for a background color!`);
            } else {
                alert(`So you like ${color.value} more than ${value} now?`);
            }
            value = color.value;
        });
    }
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

function employeePeekaboo() {
    let employees = document.getElementsByClassName('empName');

    for (let emp of employees) {
        emp.onmouseover = () => {
            emp.style.visibility = 'hidden';
        }
        emp.onmouseout = () => {
            emp.style.visibility = 'visible';
        }
    }
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function currentTime() {
    let currentTime = document.getElementById('currentTime');
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        currentTime.innerText = time;
    }, 1000);
}

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

function randomColor() {
    let hello = document.getElementById('helloWorld');
    let randomPick = () => {return Math.floor(Math.random() * 256)}

    hello.onclick = () => {
        let red = randomPick();
        let green = randomPick();
        let blue = randomPick();
        setTimeout(() => {
            hello.style.color = `rgb(${red}, ${green}, ${blue})`;
        }, 3000);
    }
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node, func) {
    func(node);
    for (let child of node.childNodes) {
        walkTheDOM(child, func);
    }
}

getUSA();
getPeopleInSales();
getAnchorChildren();
getHobbies();
getCustomAttribute();
// unobtrusiveSum();
unobtrusiveHandler();
favColor();
employeePeekaboo();
currentTime();
randomColor();
walkTheDOM(document, node => console.log(node));