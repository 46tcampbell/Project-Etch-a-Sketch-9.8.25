const mainContainer = document.getElementById('main-container');
mainContainer.style.height = '600px';
mainContainer.style.width = '600px';
mainContainer.style.backgroundColor = 'black';
mainContainer.style.display = 'flex';
mainContainer.style.flexWrap = 'wrap';
mainContainer.style.margin = 'auto';
mainContainer.style.border = 'none';

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.style.backgroundColor = 'red';
  div.style.height = '6.25%';
  div.style.width = '6.25%';
  div.style.margin = 'none';
  div.style.border = 'none';
  div.addEventListener('mousemove', (e) => {
    // console.log(`${e.clientX} & ${e.clientY}`);
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
    div.appendChild(pixelDiv);
  });
  mainContainer.appendChild(div);
}
