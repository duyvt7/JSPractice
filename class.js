// class rectangle {
//     constructor(width, length){
//         this.width = width;
//         this.length = length;
//     }
// }
// console.log(rectangle.name)
// class expression
let rectangle = class{
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
}
console.log(rectangle.name)
let Rectangle = class rectangle2 {
    constructor(width, length){
        this.width=width;
        this.length = length;
    }
}
console.log(Rectangle.name)