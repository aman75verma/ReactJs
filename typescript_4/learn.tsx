interface MyCustomObj{
   readonly a:number,
    readonly b:number
}

function add(obj:MyCustomObj) : number{
    return obj.a + obj.b
}

function multiply(a:number , b:number) : number{
    return a*b
}

const b = multiply(5,6)
console.log(b)