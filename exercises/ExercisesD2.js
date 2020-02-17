// FIbonacci Console
function Fib(n) {

let a = 1
let b = 1
    for(let i = 0;i < n; i++){
        const aux = a + b
        a = b
        b = aux
        console.log(`fib ${i+1}: ${aux}`)
    }
}
Fib(10)

//Fibonacci array console.
function FibArray(n){
    let a = 1
    let b = 1
    let list = []
    for(let i = 0; i < n; i++){
        const aux = a + b
        a = b
        b = aux
        console.log(list.push(aux))
}
console.log(list)
}
FibArray(10)

