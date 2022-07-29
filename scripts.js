//add grid to html
const gridContainer = document.getElementById('grid_container');
console.log(gridContainer.getAttribute('id'));

for(let i = 0; i < 4; i++) {

    const gridCol = document.createElement('div');
    gridCol.className ='grid-col';
    gridContainer.appendChild(gridCol);
}

let num = 1;
for(child of gridContainer.childNodes){

    for(let i = 0; i < 4; i++) {

        const gridBlock = document.createElement('div');
        gridBlock.className ='grid-block';
        gridBlock.textContent = num;
        child.appendChild(gridBlock);
        num++;
    }
}

const blocks = document.querySelectorAll('.grid-block');

function changeBackground(el) {

    el.style.backgroundColor = 'black';
}

blocks.forEach((block) => block.addEventListener('mouseover', () => 
                        changeBackground(block)));