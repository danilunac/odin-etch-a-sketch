// Selects the grid container from the DOM
const container = document.querySelector('#container');

// Returns a random integer from 0 up to (but not including) maxNumber
function getRandomNumber (maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

// Generates a random RGBA color with fixed alpha at 0.1
    function getRandomRGBAColor() {
    const r = getRandomNumber(256);
    const g = getRandomNumber(256);
    const b = getRandomNumber(256);
    const a = 0.1;

    const rgbaRandomColor = `rgba(${r}, ${g}, ${b}, ${a})`;

    return rgbaRandomColor;
}

// Increases the alpha value of an RGBA color by 0.1, up to a maximum of 1
    function incrementOpacity(rgba) {
    const start = '(';
    const end = ')';
    const indexOfStart = rgba.indexOf(start);
    const indexOfEnd = rgba.indexOf(end);
    const colorComponents = rgba.slice(indexOfStart + 1, indexOfEnd).split(',');

    let red = null;
    let green = null;
    let blue = null;
    let alpha = null;

    for (let i = 0; i < colorComponents.length; i++) {
        if (i === 0) {
            red = parseInt(colorComponents[i]);
        } else if (i === 1) {
            green = parseInt(colorComponents[i]);
        } else if (i === 2) {
            blue = parseInt(colorComponents[i]);
        } else {
            alpha = parseFloat(colorComponents[i]);
        }
    }

    let alphaFloat = Number(alpha.toFixed(1));

    if (alphaFloat === 1) {
        const newRGBA = `rgba(${red}, ${green}, ${blue}, ${alphaFloat})`;
        return newRGBA;
    } else if (alphaFloat < 1) {
        alphaFloat += 0.1;
        const newRGBA = `rgba(${red}, ${green}, ${blue}, ${alphaFloat})`;
        return newRGBA;
    } 
}

function generateGrid() {  
    // Remove cells before generating new grid
    container.innerHTML = '';

    const size = parseInt(prompt('Enter number of cells: '));
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    // // Calculate the size of each cell based on the 960px container width
    const cellSize = 960 / size;

    function createCell(parentElement) {
        const cell = document.createElement('div');
        cell.style.border = '0.5px solid red';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        cell.style.margin = '0';
        cell.style.padding = '0';

        parentElement.appendChild(cell);
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            createCell(container);
        }
    }
}

// Create an event that changes the cell color on mouse hover
container.addEventListener('mouseover', (e) => {
    let style = e.target.style;
    // Set a random background color only if the cell doesn't already have one
    if (!style.backgroundColor) {
        style.backgroundColor = getRandomRGBAColor();
    } else {
        let rgbaColors = incrementOpacity(style.backgroundColor);
        style.backgroundColor = rgbaColors;
    }
});

// Button that creates an event to generate a new grid
const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener('click', generateGrid);