//classe pixel

let colorsPalet = {
    'black': 'black',
    'red': 'red',
    'blue': 'blue',
    'green': 'green',
}

//cria a paleta
for (data in colorsPalet) {
    let elementSRC = document.querySelector('#color-palette');

    let createTempElement = document.createElement('div');
    createTempElement.classList = 'color';
    createTempElement.id = data;
    createTempElement.style.backgroundColor = colorsPalet[data];
    createTempElement.addEventListener('click', getColorPalet);

    if (data == colorsPalet.black) {
        createTempElement.classList.add('selected');
    }

    elementSRC.appendChild(createTempElement);

}

let elementParentOfPixelBoard = document.getElementById('flexible-div');
let newElementDiv = document.createElement('div');
newElementDiv.id = "pixel-board";
elementParentOfPixelBoard.appendChild(newElementDiv);

//cria a grade inicial, com 25 px
createPixels();
function createPixels(valor = 0) {
    if (valor <= 5 || valor == 'undefined') {
        valor = 25;
    } else if (valor >= 50) {
        valor = 2500
    } else {
        valor *= valor;
    }

    for (let index = 1; index <= valor; index += 1) {
        let elementSRC = document.querySelector('#pixel-board');
        let createTempElement = document.createElement('div');
        createTempElement.classList = 'pixel';
        createTempElement.id = 'id-pixel-' + index;
        createTempElement.style.backgroundColor = 'rgb(255,255,255)';

        //adiciona a função listaner na criação do elemento
        createTempElement.addEventListener('click', (event) => {
            event.target.style.backgroundColor = colorSelected;
        })
        elementSRC.appendChild(createTempElement);
    }
}

//seleciona a cor preta na paleta ao iniciar a pagina
let colorSelected = document.querySelector('#black').style.backgroundColor;

//pega a cor da paleta e liga e desliga o 'selected'
function getColorPalet(event) {
    for (let data in colorsPalet) {
        let getElementTemp = document.getElementById(data);

        if (data == event.target.id) {
            getElementTemp.classList.add('selected');
        } else {
            getElementTemp.classList.remove('selected');
        }
    }
    colorSelected = event.target.style.backgroundColor;
}


//botão que limpa todos os pixels
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', () => {
    let getElementTemp = document.getElementsByClassName('pixel');
    for (let index = 0; index < getElementTemp.length; index += 1) {
        getElementTemp[index].style.backgroundColor = 'rgb(255,255,255)';
    }
});


// botão que refaz os pixels
let generateButton = document.querySelector('#generate-board');
let boardSize = document.getElementById('board-size');
generateButton.addEventListener('click', () => {

    if (boardSize.value == '') {
        window.alert('Board inválido!');
    } else {
        let allPixelsCreated = document.querySelectorAll('.pixel');
        //console.log(allPixelsCreated);
        for (let data of allPixelsCreated) {
            data.remove();
        }

        createPixels(boardSize.value);
        boardSize.value = '';
    }

});