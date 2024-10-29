Random Color Generator
This is a simple web application that generates a random RGB color and applies it to a <div> element's background when a button is clicked. It also displays the generated color's RGB value on the screen.

Features
Generates a random RGB color every time the button is clicked.
Updates the background color of the <div> element to the newly generated color.
Displays the generated RGB value as text on the page.
Technologies Used
HTML: For the basic structure of the webpage.
CSS: For styling the page.
JavaScript: For the random color generation and event handling.
How to Use
Clone this repository or download the files.
Open the index.html file in any modern web browser.
Click on the "Generate Color" button to generate a random RGB color.
The <div> element's background color will change, and the RGB value will be displayed above it.
Code Overview
JavaScript
The main logic for generating a random color is written in JavaScript.

RandomColorGen() function generates a random RGB color using Math.random() and Math.floor().
The color is applied to the <div> element, and the RGB value is displayed in the <h4> element.

function RandomColorGen() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    let color = `rgb(${red}, ${green},${blue})`;
    
    return color;
}
HTML Structure
The page consists of an h4 element to display the RGB value, a button to trigger the color change, and a <div> where the background color is applied.

<h4>Generator A Random Color</h4>
<button>Generate Color</button>
<div>This is your new Color</div>
CSS
Basic styling for aligning and formatting the elements on the page.


body {
    text-align: center;
}

div {
    height: 100px;
    width: 500px;
    border: 1px solid black;
    margin: auto;
}

