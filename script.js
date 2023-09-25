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

function getGridNumber(){
    return prompt("Pick a number between 1 and 100")
}

function checkGridNumber(gridNumber){
    return ((gridNumber >= 1) && (gridNumber <= 100)) ? true : false;
}

function buildNewGrid(){
    let gridNumber = getGridNumber();
    let isGridNumberValid = checkGridNumber(gridNumber);
    if (isGridNumberValid == true) {
        buildGrid(gridNumber);
    }else {
        alert("Invalid response. Try again!");
    }
}
