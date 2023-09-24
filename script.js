let container = document.querySelector('.container');

window.addEventListener("load", buildGrid(16))

function buildGrid(gridNumber){
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < gridNumber; i ++){
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        for(let i = 0; i < gridNumber; i ++){
            let columnDiv = document.createElement('div');
            columnDiv.classList.add('columnDiv');
            columnDiv.addEventListener('mouseenter', function(){
                columnDiv.classList.add('colorAdded');
            });
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
}

function makeNewGrid(){
    let gridNumber = getGridNumber();
    buildGrid(gridNumber);
}

function getGridNumber(){
    return prompt("How many squares?");
}

let newGridButton = document.querySelector('.button')

newGridButton.addEventListener('click', makeNewGrid)
