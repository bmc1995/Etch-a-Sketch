let grid = document.getElementById('grid-container');
let size = 16;
let rainbow = false;

function makeGrid(size){
    for (let i = 1; i <= size; i++) {
        for(let j = 1; j <= size; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.height = 100 / size + "%";
            square.style.width = 100 / size + "%";
            grid.appendChild(square);
        }
    }
    colorChange();
}

function colorChange(){
    let square = document.querySelectorAll('.square');
    let hovered = function(e){
        if(rainbow){
            let r = Math.round(255 * Math.random());
            let g = Math.round(255 * Math.random());
            let b = Math.round(255 * Math.random());
            e.target.style.background = `rgb(${r},${g},${b})`;
        } else{
            e.target.style.background = 'black';
        }
    };
    square.forEach(square => {
        square.addEventListener("mouseenter", hovered);
    });
}
makeGrid(size);


// clear button
clearFunc = function(e){
    let squares = document.querySelectorAll('.square')
    squares.forEach(squares => {
        squares.style.background = 'white';
    });
}
let clearbtn = document.getElementById('clearbtn');
clearbtn.addEventListener('click', clearFunc);
// rainbow toggle button
function rainbowFunc(){
    rainbow = !rainbow;
    if(rainbow){
        let rbtn = document.getElementById('rainbowbtn');
        rbtn.innerText = "Rainbow (On)"
    } else {
        let rbtn = document.getElementById('rainbowbtn');
        rbtn.innerText = "Rainbow (Off)"
    }
}
let rainbowbtn = document.getElementById('rainbowbtn');
rainbowbtn.addEventListener('click', rainbowFunc)
// resize button
function resizeFunc(){
    let toRemove = document.getElementById('grid-container');
    while (toRemove.firstChild) {
        toRemove.removeChild(toRemove.firstChild);
    }
    let size = prompt('How big do you want your grid? (1-64)')
    if(size < 1 || size > 64){
        alert('Please enter a number from 1 to 64\nGrid defaulting to 16x16');
        makeGrid(16);
    } else if(isNaN(size) == true){
        alert(`is ${size} an instrument?`);
        makeGrid(16);
    } else {
        makeGrid(`${size}`);
    }
}

let resizebtn = document.getElementById('resizebtn');
resizebtn.addEventListener('click', resizeFunc);