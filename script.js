let container = document.querySelector('.container');

for (let i = 0; i < 16; i ++){
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    for(let i = 0; i < 16; i ++){
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('columnDiv');
        columnDiv.addEventListener('mouseenter', function(){
            columnDiv.classList.add('colorAdded');
        });
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);

}
