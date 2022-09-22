// Function
// function is a block of code which is used for doing a particular task.
// function is also decrease code repeatation.
// Function has 2 types. and they are 1. Built in function and
// User defined function.
//  Built in function is used with (). 
// User defined function has 2 parts . and they are. 1> Creating part.
// and 2> Function calling
function sayHello(){
    console.log('amar sonar bangla')
}
sayHello()
sayHello()
sayHello()
sayHello()
// =========== parameter, arguments and return ==========
function saySomething(para1) { // parameter 
    alert(para1)    
}
saySomething('ami tomay valobashi.') // arguments.
// another practise of param and arguments.
function fullName(fname, lname){
    console.log(`this is ${fname} ${lname} here today.`)
}
fullName('Omar', 'Faruk')
// ======= mathmatical operation and return value in a function. ==========
function addNumber(a=0, b=0){
    return (a + b);
}
let result = addNumber(10,15);
console.log(result)