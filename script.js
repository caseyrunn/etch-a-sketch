let container = document.querySelector('.container');
console.log(container);

for (let i = 0; i < 16; i ++){
    let rowDiv = document.createElement('div');
    for(let i = 0; i < 16; i ++){
        let columnDiv = document.createElement('div');
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}