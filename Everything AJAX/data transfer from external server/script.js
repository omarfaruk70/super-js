// synchronous programming
// javascript enginne is by default synchronous.
// console.log('task1');
// console.log('task2');
// console.log('task3');
// console.log('task4');
// console.log('task5');
// // asynchronoys programming
// function taskOne() {
//     console.log('this is task01')
// };
// function taskTwo() {
//     console.log('this is task02')
// };
// const data = () =>{
//     console.log('this is task03. loading')
// };
// const taskThree = () =>{
//     setTimeout(data, 2000);
// }
// function taskFour() {
//     console.log('this is task04')
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// ========= starting ajax ===========
// ajax stands for asynchronous javascript and xml.
document.getElementById('btn').addEventListener('click', loadData);
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('Get', 'data.txt'  , true);
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText)
            let result = this.responseText
            document.getElementById('output').innerHTML  = `${result}`
        }
        else{
            console.log('Error! Something went wrong');
        };
    };
    document.get
    xhr.send()
};
// Get data from external server using ajax.
// from icndb.com 
document.getElementById('jokes').addEventListener('click', getJokes);
function getJokes(){
    let xhr = new XMLHttpRequest()
    xhr.open('Get', 'https://api.icndb.com/jokes/random', true)
    xhr.onload = function(){
        if(this.status === 200){
            let result = this.responseText
            document.getElementById('jokes').innerHTML = result;
        }
    else{
        console.log('File not found!')
    }
    xhr.send()
}
};