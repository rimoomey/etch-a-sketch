//grid size constant
let gridSize = 64;
const gridContainer = document.getElementById('grid_container');

//add grid to html
function createGrid(gridSize){
    
    console.log(gridContainer.getAttribute('id'));

    for(let i = 0; i < gridSize; i++) {

        const gridCol = document.createElement('div');
        gridCol.className ='grid-col';
        gridContainer.appendChild(gridCol);
    }

    //create children divs for columns
    let num = 1;
    for(child of gridContainer.childNodes){

        for(let i = 0; i < gridSize; i++) {

            const gridBlock = document.createElement('div');
            gridBlock.className ='grid-block';
            child.appendChild(gridBlock);
            num++;
        }
    }

    const blocks = document.querySelectorAll('.grid-block');

    blocks.forEach((block) => block.addEventListener('mouseover', () => 
                        changeBackground(block)));

}

//run createGrid with default size
createGrid(gridSize);

//prompt user for grid size
function userPrompt() {

   return prompt("How big should the grid be?");
}

//change background color of block
function changeBackground(el) {

    el.style.backgroundColor = 'black';
}

//get rid of present children between program runs
function removeAllChildNodes(parent) {

    while(parent.firstChild) {

        parent.removeChild(parent.firstChild);
    }
}

//add button functionality
const goButton = document.querySelector('button');

//each click resets grid and allows user to create another
goButton.addEventListener('click', () => {

    removeAllChildNodes(gridContainer);
    gridSize = userPrompt();
    createGrid(gridSize);
})