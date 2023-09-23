let container = document.querySelector('.container');
console.log(container);

for (let i = 0; i < 16; i ++){
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
}