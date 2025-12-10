const container = document.querySelector('#container');

const gridSize = 100;
const cellSize = 960 / gridSize;

function createCell(parentElement) {
    const cell = document.createElement('div');
    cell.style.border = '0.5px solid grey';
    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';
    cell.style.margin = '0';
    cell.style.padding = '0';

    parentElement.appendChild(cell);
}

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            createCell(container);
        }
    }
}

generateGrid(gridSize);

container.addEventListener('mousemove', (e) => {
    e.target.style.backgroundColor = 'blue';
})