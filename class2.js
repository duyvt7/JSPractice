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

// binding this with prototype and static method 

class animal{
    constructor(type){
        this.type = type
    }
    static type = 'a Dog'
    static eat(){
        return console.log(`${this.type} is eatting`)
    }
    eat2(){
        return console.log(`${this.type} is eatting`)
    }
}
animal.eat('dog')
let z = new animal('dog')
console.log(z.eat2())

// sub class

class animal2 {
    constructor(type){
        this.type = type
    }
    speak(){
        console.log(`${this.type} is making noise`)
    }
}
class dog extends animal2{
    constructor(type){
        super(type)
    }
    bark(){
        console.log(`${this.type} is barking`)
        console.log(super.speak())
    }
}

var D = new dog('spike')
D.speak()
D.bark()
