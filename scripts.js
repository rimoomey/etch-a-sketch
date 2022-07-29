//grid size constant
let gridSize = 4;
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

   let size = parseInt(prompt("How big should the grid be?"));

   //check for invalid input
   if(typeof size !== "number") {

    alert('Invalid input. Try again');
    return gridSize;
   }

   if (size > 100) size = 100;

   return size;
}

//change background color of block
function changeBackground(el) {

    const colorRed = Math.floor(Math.random() * 255) + 1;
    const colorGreen = Math.floor(Math.random() * 255) + 1;
    const colorBlue = Math.floor(Math.random() * 255) + 1;

    el.style.backgroundColor = `rgb(${colorRed},${colorGreen},${colorBlue})`;
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