class rectangle {
    constructor(width,height){
        this.width = width
        this.height = height
    }
    getArea(){
        return this.width*this.height
    }
    static getParemeter(){
        return this.width+this.height
    }
}
var x = new rectangle(10,5)
console.log(x.getArea())
console.log(
    rectangle.getParemeter()
)