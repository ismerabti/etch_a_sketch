// Bismillah
const container = document.querySelector('.container')
const chooseBtn = document.getElementById('choose')
const eraseBtn = document.getElementById('erase')
const blackBtn = document.getElementById('black')
const clearBtn = document.getElementById('clear')
const rainbowBtn = document.getElementById('rainbow')
let numberOfSquares = document.getElementById('g-number')

// Create Grid
function createGrid(div, numofChilds){
    div.innerHTML = ""
    // create grid childs
    for(let i = 0; i < Math.pow(numofChilds, 2); i++){
        const child = document.createElement('p')
        div.append(child)
    }
    div.style.display = "grid"
    div.style.gridTemplateColumns = `repeat(${numofChilds}, 1fr)`
    div.style.gridTemplateRows = `repeat(${numofChilds}, 1fr)`
}
// Event on the Choose Btn
numberOfSquares.addEventListener('change', function(){
    // For Now let make the Max squares to be times x20
    let squares = numberOfSquares.value;
    if(squares > 0 && squares < 20){
        createGrid(container, squares)
    } else {
        confirm("Numbe Should be more than 0 & less than 20")
        squares = 1
    }
})

// Main BG Color : Blue
mainColor();
function mainColor(){
    chooseBtn.addEventListener('click', () => {
        const allP = document.querySelectorAll('p')
        allP.forEach(para => {
            para.addEventListener("mouseover", () => {
                para.style.backgroundColor = "blue"
            })
        })
    })
}

// Remove BG Color
removeBG()
function removeBG(){
    eraseBtn.addEventListener('click', () => {
        const allP = document.querySelectorAll('p')
        console.log("Erase Button")
        allP.forEach(para => {
            para.addEventListener('mouseover', function(){
                para.style.backgroundColor = "transparent"
            })
        })
    })
}

// Balck BG Color 
balckBG()
function balckBG(){
    blackBtn.addEventListener("mouseover", () => {
        const allP = document.querySelectorAll('p')
        allP.forEach(para => {
            para.addEventListener("mouseover", () => {
                // para.className = "colorC"
                para.style.backgroundColor = "black"
            })
        })
    })
}

// Clear the Board
clearBoard()
function clearBoard(){
    clearBtn.addEventListener('click', () => {
        const allP = document.querySelectorAll('p')
        allP.forEach(para => {
            para.style.backgroundColor = "transparent"
        })
    })
}

// Rainbow Colors 
rainbowFun()
function rainbowFun(){
    const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    let nextIndex = 0;
    rainbowBtn.addEventListener('click', () => {
        const allP = document.querySelectorAll('p')
        allP.forEach(para => {
            para.addEventListener("mouseover", () => {
                para.style.backgroundColor = rainbow[nextIndex]
                nextIndex++
                // Reset the index
                if(nextIndex == 7){
                    nextIndex = 0
                }
            })
        })

        
        
    })
}

// todo
// I want to change that input text with range type,