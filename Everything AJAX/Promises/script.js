// Javascript Promises.
// a promise has two param . and they are 1. resolve 2. reject
// creating a promise
const pro1 = new Promise(function(resolve, reject){
    let completePromise = false;
    if(completePromise){
        resolve('Promise successfully executed')
    }
    else{
        reject('Error! Something went wrong')
    }
});
pro1.then(function(response){
    console.log(response)
}).catch(function(err){
    console.log(err)
});
