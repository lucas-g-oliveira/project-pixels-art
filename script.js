//classe pixel

let colorsPalet = {
    'black': 'black',
    'red': 'red',
    'green': 'green',
    'blue': 'blue',
    'yellow': 'yellow',
    'orange': 'orange',
}

//cria a paleta
for (data in colorsPalet) {
    let elementSRC = document.querySelector('#color-palette');

    let createTempElement = document.createElement('div');
    createTempElement.classList = 'color';
    createTempElement.id = data;
    createTempElement.style.backgroundColor = colorsPalet[data];

    elementSRC.appendChild(createTempElement);
}

//cria a grade inicial, com 25 px
for (let index = 1; index <= 25; index += 1) {
    let elementSRC = document.querySelector('#pixel-board');

    let createTempElement = document.createElement('div');
    createTempElement.classList = 'pixel';
    createTempElement.id = 'id-pixel-'+index;
    createTempElement.style.backgroundColor = 'rgb(255,255,255)';

    elementSRC.appendChild(createTempElement);
}