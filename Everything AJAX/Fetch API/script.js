// fetch api.
// 4 ways to calling a javascript api ---- xml HTTPRequest, Fetch, axios, jquery.
// fetch is a digital method of XMLHttpRequest and its globally used.XMLHttpRequest
// xml http request is old . its replaced by fetch.
// fetch 2 ways to call and they are 1. then, 2. async await.
// important subject is  fetch api.
// fetch api has two data types. and they are 1. json 2. text.
document.getElementById('btn').addEventListener('click', getData);
function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(res){
        return (res.json())
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
};