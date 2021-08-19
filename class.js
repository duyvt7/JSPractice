// class rectangle {
//     constructor(width, length){
//         this.width = width;
//         this.length = length;
//     }
// }
// console.log(rectangle.name)
// class expression
// let rectangle = class{
//     constructor(width, length){
//         this.width = width;
//         this.length = length;
//     }
// }
// console.log(rectangle.name)
// let Rectangle = class rectangle2 {
//     constructor(width, length){
//         this.width=width;
//         this.length = length;
//     }
// }
// console.log(Rectangle.name)

// prototype method

class rectangle {
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
    calArea (){
        return this.width* this.length;
    }
}
const square = new rectangle(10,10)
console.log(square.calArea())

//generator method

class polygon {
    constructor(...sides){
        this.sides = sides;
    }
    *getSide (){
        for (const side of this.sides){
            yield side
        }
    }
}
const pentagon = new polygon(1,2,3,4,5)
console.log([...pentagon.getSide()])

// class Polygon {
//     constructor(...sides) {
//       this.sides = sides;
//     }
//     // Method
//     *getSides() {
//       for(const side of this.sides){
//         yield side;
//       }
//     }
//   }
  
//   const pentagon = new Polygon(1,2,3,4,5);
  
//   console.log([...pentagon.getSides()]); // [1,2,3,4,5]
  