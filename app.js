const container = document.querySelector('#container');

function getRandomNumber (maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function getRandomRGBColor() {
    const r = getRandomNumber(256);
    const g = getRandomNumber(256);
    const b = getRandomNumber(256);

    const rgbRandomColor = `rgb(${r}, ${g}, ${b})`;

    return rgbRandomColor;
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
        cell.style.border = '0.5px solid grey';
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
    const currentTarget = e.target.style;
    // Set a random background color only if the cell doesn't already have one
    if (!currentTarget.backgroundColor) {
        currentTarget.backgroundColor = getRandomRGBColor();
    }
    
    // Increase opacity by 10% on each mouseover
    if (e.target.style.opacity === '') {
        e.target.style.opacity = '0.1'
    } else if (e.target.style.opacity === '0.1') {
        e.target.style.opacity = '0.2';
    } else if (e.target.style.opacity === '0.2') {
        e.target.style.opacity = '0.3';
    } else if (e.target.style.opacity === '0.3') {
        e.target.style.opacity = '0.4';
    } else if (e.target.style.opacity === '0.4') {
        e.target.style.opacity = '0.5';
    } else if (e.target.style.opacity === '0.5') {
        e.target.style.opacity = '0.6';
    } else if (e.target.style.opacity === '0.6') {
        e.target.style.opacity = '0.7';
    } else if (e.target.style.opacity === '0.7') {
        e.target.style.opacity = '0.8';
    } else if (e.target.style.opacity === '0.8') {
        e.target.style.opacity = '0.9';
    } else {
        e.target.style.opacity = '1';
    }   
});

// Button that creates an event to generate a new grid
const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener('click', generateGrid);