let rectangleLength = document.querySelector("#rectangle-length")
let rectangleWidth = document.querySelector("#rectangle-width")
let rectangleArea = document.querySelector("#rectangle-area")
let rectanglePerimeter = document.querySelector("#rectangle-perimeter")

let squareSide = document.querySelector("#square-side")
let squareArea = document.querySelector("#square-area")
let squarePerimeter = document.querySelector("#square-perimeter")

let circleRadius = document.querySelector("#circle-radius")
let circleArea = document.querySelector("#circle-area")
let circleCircumference = document.querySelector("#circle-circumference")


rectangleLength.oninput = function (){
    calculateRectangleArea()
    calculateRectanglePerimeter()
}

rectangleWidth.oninput = function (){
    calculateRectangleArea()
    calculateRectanglePerimeter()
}

squareSide.oninput = function (){
    calculateSquareArea()
    calculateSquarePerimeter()
}
circleRadius.oninput = function (){
    calculateCircleArea()
    calculateCircleCircumference()
}


function calculateRectangleArea(){
    let ra = parseFloat(rectangleLength.value) * parseFloat(rectangleWidth.value)
    if(!isNaN(ra)){
        rectangleArea.textContent = "Area = " + ra
    }
}
function calculateRectanglePerimeter(){
    let rp = ((parseFloat(rectangleLength.value) + parseFloat(rectangleWidth.value)) * 2)
    if(!isNaN(rp)){
        rectanglePerimeter.textContent = "Perimeter = " + rp
    }
}


function calculateSquareArea(){
    let sa = parseFloat(squareSide.value) * parseFloat(squareSide.value)
    if(!isNaN(sa)){
        squareArea.textContent = "Area = " + sa
    }
}
function calculateSquarePerimeter(){
    let sp = (parseFloat(squareSide.value) * 4)
    if(!isNaN(sp)){
        squarePerimeter.textContent = "Perimeter = " + sp
    }
}


function calculateCircleArea(){
    let ca = Math.pow(circleRadius.value,2) * Math.PI
    if(!isNaN(ca)){
        circleArea.textContent = "Area = " + ca.toFixed(2)
    }
}
function calculateCircleCircumference(){
    let cc = (Math.PI * parseFloat(circleRadius.value) * 2)
    if(!isNaN(cc)){
        circleCircumference.textContent = "Circumference = " + cc.toFixed(2)
    }
}