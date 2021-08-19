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