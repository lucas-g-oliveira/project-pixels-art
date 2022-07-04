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
    createTempElement.addEventListener('click',getColorPalet);

    if(data == colorsPalet.black){
        createTempElement.classList.add('selected');
    }

    elementSRC.appendChild(createTempElement);
    
}

//cria a grade inicial, com 25 px
for (let index = 1; index <= 25; index += 1) {
    let elementSRC = document.querySelector('#pixel-board');

    let createTempElement = document.createElement('div');
    createTempElement.classList = 'pixel';
    createTempElement.id = 'id-pixel-'+index;
    createTempElement.style.backgroundColor = 'rgb(255,255,255)';
    createTempElement.addEventListener('click',paintPixel)

    elementSRC.appendChild(createTempElement);
}

//seleciona a cor preta na paleta ao iniciar a pagina
let colorSelected = document.querySelector('#black').style.backgroundColor;
console.log(colorSelected);

//pega a cor da paleta
function getColorPalet(event){
    for(let data in colorsPalet){
        let getElementTemp = document.getElementById(data);

        if(data == event.target.id){
            getElementTemp.classList.add('selected');
        }else{
            getElementTemp.classList.remove('selected');
        }
    }

    colorSelected = event.target.style.backgroundColor;
}

//pinta o pixel da grade
function paintPixel(event){
    event.target.style.backgroundColor = colorSelected;
}
