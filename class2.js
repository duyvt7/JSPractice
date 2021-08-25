class rectangle {
    constructor(width,height){
        this.width = width
        this.height = height
    }
    getArea(){
        return this.width*this.height
    }
    static getParemeter(a,b){
        return (a+b)
    }
}
var x = new rectangle(10,5)
console.log(x.getArea())
console.log(rectangle.getParemeter(10,10))

