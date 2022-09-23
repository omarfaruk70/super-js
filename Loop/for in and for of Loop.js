// for in loop and for off loop
// for in loop works with === string / array / obj
// for off loop works with === string / array. (without obj)
// ====== for in loop ==========
let name = 'I am learning javascript';
for(let x in name){
    console.log(x)
    console.log(name)
    console.log(name[x])
};
// let food = ['cake', 'chocolate', 'ice-cream'];
// let person = {
//     name: 'Atif aslam',
//     age : 28,
//     country : 'Pakistan',
//     profession: 'Singer'
// };
// ==== note ====
// for in loop count index Number
// =========== for off loop ========
let address = 'Parshuram chittagong Bangladesh';
for(y of address){
    console.log(y)
}
// for off loop count value ;