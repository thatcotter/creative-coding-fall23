// declare the name
// console.log("hello from the shapeSystem file!")
class ShapeSystem {
// constructor
    constructor() {
        // - list of our shapes
        this.shapes = []
    }

// make new shapes
// method?
    createShape() {
        // make a new shape object
        let temp = new Shape(
            random(0, width),
            random(0, height),
            25,
            25,
            random(-2, 2),
            random(-2, 2)
        )
        temp.color = [
            random(255),
            random(255),
            random(255)
        ]
        // add it to our shapes arr
        this.shapes.push(temp)
    }

    // get rid of old shapes
   discardShapes() {
        for(let i = 0; i < this.shapes.length; i++){
            // IF a shape is too old
            if(this.shapes[i].age > 200){
                // THEN we remove it from 
                // the shapes arr
                this.shapes.splice(i, 1)
            }
        } 
   }

// update the shapes
   update() {
    // for each shape in our arr
    // update its position based on 
    // its speed
        for(let i = 0; i < this.shapes.length; i++) {
            this.shapes[i].update()
        }
   }

// draw the shapes
   display() {
    // for each shape in our arr
    // draw it
        for(let i = 0; i < this.shapes.length; i++){
            this.shapes[i].display()
        }
   }
}