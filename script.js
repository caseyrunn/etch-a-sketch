let container = document.querySelector('.container');

for (let i = 0; i < 16; i ++){
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    for(let i = 0; i < 16; i ++){
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('columnDiv');
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}