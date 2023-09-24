let container = document.querySelector('.container');

let newGridButton = document.querySelector('.button')

window.addEventListener("load", buildGrid(16))

newGridButton.addEventListener('click', makeNewGrid)


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

function getGridNumber(){
    return prompt("How many squares?");
}

function buildNewGrid(){
    let gridNumber = getGridNumber();
    buildGrid(gridNumber);
}
