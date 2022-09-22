// All about JSON
// JSON is stand for Javscript object notation.
let person = {
    name : 'Omar Faruk',
    age : 21,
    isEducated : true,
    semester : '5Th semester'
};
let result1 = person;
console.log(result1);
// convertion from js to json.
let output1 = JSON.stringify(person); //js to json
console.log(output1)
// convertion json to js.
let output2 = JSON.parse(output1);
console.log(output2)