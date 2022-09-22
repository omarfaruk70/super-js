// forEach function
let foods = ['chocolate', 'biscuit', 'ice-cream', 'apple', 'banana', 'bread'];
// first param = value;
// second param = index;
// third param = full array
foods.forEach(function(value, index, fullArray){
    console.log(value);
    // console.log(index);
    // console.log(fullArray)
});

//  a dynamic forEach method or function.
let friends = ['Faruk','Minhaz', 'Opi', 'Saiful', 'Noman'];
let allFriend = function(item){
    console.log(item)
}
friends.forEach(allFriend)

//  also a dynamic practise of my family members.
let members = ['Abbu', 'Ammu', 'Armin', 'Faruk'];
let all = function(item, index, allMembers){
    console.log(allMembers)
}
members.forEach(all);
// ======== array iteration using map() method or function =======
// map and forEach method is totally similar but having a difference. and that is 
// forEach just use for iterate an array. besides map iterate an array and map also can return another new array.
let subject = ['Bangla', 'English', 'Math', 'Science'];
function nameOfSBJ(item){
    return(`${item} is a subject !`)
}
let result = subject.map(nameOfSBJ)
console.log(result)
// mathmatical operation of javascript using map() function.
let number = [10,5,56,12];
let multiflied = number.map(function(item){
return item * item ;
});
console.log(multiflied)