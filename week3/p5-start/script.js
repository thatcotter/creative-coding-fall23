class Shape {
  constructor(_x, _y, _w, _h, _speedX, _speedY){
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
    this.speedX = _speedX
    this.speedY = _speedY
    this.color = 255
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
  }

  display() {
    fill(this.color)
    rect(this.x, this.y, this.w, this.h)
  }
}

let myArray = ["it", "was", "a", "dark", "and", "stormy", "night"]

let myRect = new Shape(200, 100, 50, 50, 3, 1)

myRect.color = [200, 20, 200]

let myOtherRect = new Shape(400, 500, 50, 50, -1, -1)

// let myObjArr = [myRect, myOtherRect]

// let myRect = {
//   x: 200,
//   y: 100,
//   w: 50,
//   h: 50,
//   speedX: 3,
//   speedY: 1
// }

function setup() {
  createCanvas(600, 600)
  console.log('hello!')
  console.log("triangle has sides a 7 and b 4, so side c is:", pythagorean(7, 4))

  console.log(myArray)
  console.log(myArray[0])
  console.log(myArray[1])
  console.log(myArray.length)

  myOtherRect.color = color(220, 120, 20)
}

function draw() {
  background(200)

  fill(0,255,0)
  ellipse(100, 100, 100, 100)

  paintItRed(ellipse, 300, 200, 100, 100)

  paintItRed(rect, 100, 400, 100, 100)

  // myRect.x += myRect.speedX
  // myRect.y += myRect.speedY
  myRect.update()
  myOtherRect.update()

  // fill(0,0,255)
  // rect(myRect.x, myRect.y, myRect.w, myRect.h)
  myRect.display()
  myOtherRect.display()
}

function paintItRed(shape, x, y, w, h) {
  fill(220,0,0)
  shape(x,y,w,h)
}


// sum adds two numbers together
function sum(a, b) {
  return a + b
}

// gets the value of side c given sides a and b
function pythagorean(a, b) {
  let cSqr = pow(a, 2) + pow(b, 2)
  let c = sqrt(cSqr)
  return c
}