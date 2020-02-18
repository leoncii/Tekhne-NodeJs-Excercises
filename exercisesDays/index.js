

// function fib(n){
//   let a = 1
//   let b = 1
//     for (let i = 0; i < n; i++) {
//        const sig = a + b 
//         a = b 
//         b = sig
//     console.log(sig) 
//     }
// }

// fib(4)


// 'a x b'
// 3 + 133
// 66 - 133


// function rege(par){
// }
//     const regex = /([0-9]{4})/
//     const match = regex.exec('23-14')
//     const num1 = match[1]
//     const num2 = match[2]
//     console.log(num1 + num2)


fib = n => {
    a = 1
    b = 1
    for(let i = 0; i<n; i++){       
        const sig = a + b
          a = b
          b = sig
        console.log(`numero ${i+1}: ${sig}`)
    }
}

fib(10)









