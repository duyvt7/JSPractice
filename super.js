class cat {
    constructor(name){
        this.name = name
    }
    makeNoise(){
        return console.log(`${this.name} is making noise...`)
    }
}
class tiger extends cat{
    constructor(name){
        super(name)
    }
    roar(){
        console.log(super.makeNoise())
        console.log(`${this.name} is roaring...`)
    }
}
let ho = new tiger('a tiger')
ho.roar()