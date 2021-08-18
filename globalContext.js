var mouse  = {
    name: 'jerry', 
    run : function(){
        console.log('run...', this.name)
    },
    sayHi: function(){
        console.log('Hi, My name is...', this.name)
    }

}
console.log(mouse.run())
let x = mouse.run()
console.log(x)
let cat = {
    name:'Tom',
}

var run1 = mouse.sayHi.bind(cat)
run1()