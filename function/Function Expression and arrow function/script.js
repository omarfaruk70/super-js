// Function expression 
// when we can store a function in a varriable . this function is called function expression 
// ====== Function expression ======
let saySomething = function (){
    console.log('amar sonar bangla')
}
saySomething();
// arrow function 
let sayanything = (a,b) => {
    console.log(`my favourite song is '${a}' '${b}' `)
}
let a =  'amar o poran o jaha chay.';
let b = 'tumi tai tai re, amar o poran o jaha chay';
sayanything(a, b)
// mathmatical operation of arrow function
let multiflying = (c,d) =>{
    return (c * d)
}
let result = multiflying(10,15)
console.log(result)