console.log("Asynchronous JS")

// const firstPromise = new Promise((resolve, reject) => {
//     reject("Hello")
// })

// firstPromise.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log("error" + err)
// }).finally(() => {
//     console.log("Finally")
// })

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Inside timeout")
        reject()
        }, 3000)
    
})

timeoutPromise.then(() => {
    console.log("After timeout")
}).catch(() => {
    console.log("Inside catch")
})

console.log("Don't wait for anything")