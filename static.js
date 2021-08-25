class staticExample{
    static staticProperty = 'static property'
    static staticMethod(){
        return 'this method and ' + this.staticProperty + 'has been call'
    }
    static anotherStaticMethod(){
        return this.staticMethod() + 'from another method'
    }
}
console.log(staticExample.staticMethod())
console.log (staticExample.anotherStaticMethod())