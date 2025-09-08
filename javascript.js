const mainContainer = document.getElementById('main-container');
mainContainer.style.height = '500px';
mainContainer.style.width = '500px';
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
  div.addEventListener('mousemove', (e) =>
    console.log(`${e.clientX} & ${e.clientY}`)
  );
  mainContainer.appendChild(div);
}

console.log('Hello World!');
