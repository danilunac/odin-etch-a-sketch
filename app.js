const container = document.querySelector('#container');

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
container.addEventListener('mousemove', (e) => {
    e.target.style.backgroundColor = 'blue';
})

// Button that creates an event to generate a new grid
const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener('click', generateGrid);
