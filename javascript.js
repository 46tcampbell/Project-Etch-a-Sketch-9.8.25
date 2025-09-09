const mainContainer = document.getElementById('main-container');
mainContainer.style.height = '600px';
mainContainer.style.width = '600px';
mainContainer.style.backgroundColor = 'white';
mainContainer.style.display = 'flex';
mainContainer.style.flexWrap = 'wrap';
mainContainer.style.margin = '40px auto';
mainContainer.style.border = '1px solid black';

const button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'Reset Grid';
button.style.position = 'fixed';
button.style.top = '0';
button.style.left = '47%';
button.addEventListener('click', (e) => {
  let valid = false;
  let gridSize;
  while (!valid) {
    gridSize = prompt(
      'Please enter the number of squares per side for the new grid',
      4
    );
    if (
      gridSize !== null &&
      !isNaN(gridSize) &&
      Number(gridSize) >= 1 &&
      Number(gridSize) <= 100
    ) {
      valid = true;
    } else {
      alert(
        'Invalid input, you must enter a number between 1 and 100. Please try again.'
      );
    }
  }
  console.log('Valid input:', gridSize);

  const allDivs = mainContainer.querySelectorAll('div');
  console.log(allDivs);
  allDivs.forEach((div) => div.remove());
  createGrid(gridSize);
});

function randNum() {
  return Math.floor(Math.random() * 255) + 1;
}

function createGrid(gridSize) {
  const gridAmount = gridSize * gridSize;
  for (let i = 0; i < gridAmount; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.style.height = `${(1 / gridSize) * 100}%`;
    div.style.width = `${(1 / gridSize) * 100}%`;
    div.style.margin = 'none';
    div.style.border = 'none';
    div.addEventListener('mousemove', (e) => {
      const pixelDiv = document.createElement('div');
      pixelDiv.style.backgroundColor = 'black';
      pixelDiv.style.height = '1px';
      pixelDiv.style.width = '1px';
      pixelDiv.style.margin = 'none';
      pixelDiv.style.border = 'none';
      pixelDiv.style.position = 'fixed';
      const pixelX = e.clientX;
      const pixelY = e.clientY;
      pixelDiv.style.left = `${pixelX}px`;
      pixelDiv.style.top = `${pixelY}px`;
      div.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
      div.appendChild(pixelDiv);
    });
    mainContainer.appendChild(div);
  }
  console.log(gridSize);
  console.log(gridAmount);
}

createGrid(16);
