// Callback function
// callback function works in asynchronous way
// setTimeout(function(){
//     console.log('amar sonar bangla, ami tomay valobashi.')
// }, 2000)



// let friends = [
//     {name: 'Omar Faruk', dept: 'TCT'},
//     {name: 'Saiful Emon', dept: 'DTNT'},
//     {name: 'Noman', dept: 'DTNT'},
//     {name: 'OPI', dept: 'TCT'}
// ]
// function creatFriends(item, allData){   // alldata is a callback function which is accept getData()
//     setTimeout(function(){
//         friends.push(item);
//         allData()
//     }, 1000)
// }
// function getData(){
//     setTimeout(function(){
//         let output = '';
//         friends.forEach(function(allData){
//         output += `<li>${allData.name} ${allData.dept}</li>`; 
//         })
//         document.getElementById('result').innerHTML = output;
//     }, 2000)
// }

// creatFriends({name: 'Munna', dept: 'CST'}, getData);
//  another practise of callback function
let member = [
    {fname: 'Omar', lname: 'faruk'},
    {fname: 'firoz', lname: 'ahmed'},
    {fname: 'Nasima', lname: 'akter'},
];
function lastMember(last , callback){
    setTimeout(function(){
        member.push(last)
        callback()
    }, 1000)
};
function getAll(){
    setTimeout(function(){
        let result = '';
        member.forEach(function(items){
            result += `<li> ${items.fname} ${items.lname} </li>`
        });
        document.getElementById('family').innerHTML = result
    }, 2000);
}
lastMember({fname: 'armin', lname: 'akter'}, getAll);