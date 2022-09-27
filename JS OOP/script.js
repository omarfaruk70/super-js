

// JS oop
// OOP stands for Object oriented programming.
class Person {                 // class er nam er first latter capital hote hobe. (Person)
    constructor(fname, lname, dob){
        this.firstName = fname;
        this.lastName = lname;
        this.dateOfBirth = dob;
    }
    fullName(){
        return `my Name is ${this.firstName} ${this.lastName}`;
    }
};
let person1 = new Person('Omar', 'Faruk', 2002);
console.log(person1);
console.log(person1.fullName());   // call js class object function.

// another practise of oop
class Student{           // class er nam er first latter capital hote hobe . (Student)
    constructor(name,roll, age){
        this.name = name
        this.roll = roll
        this.age = age
    }
    greetings(){
        console.log(`Hello ${this.name}  Islam. You are genious programmer`)
    }
}
let stu1  = new Student('Saiful', 13, 3275)
console.log(stu1.greetings())
// another dynamic object oriented practise
class Friends {
    constructor(fname, lname, roll, dept){
        this.firstName = fname
        this.lastName = lname
        this.rollNo = roll
        this.department = dept
    }
    descriptTion(){
        console.log(`${this.firstName} ${this.lastName} is a student of ${this.department}`)
    }
};
 let friend1 = new Friends('Omar','Faruk', 484275, 'TCT')
 let friend2 = new Friends('Minhazur','Rahman', 484280, 'TCT')
 let friend3 = new Friends('Saiful','Emon', 214464, 'DTNT')
 let friend4 = new Friends('Saikat','Noman', 345556, 'DTNT')
 let friend5 = new Friends('MH','Munna',    455465, 'CST')
 console.log(friend1.descriptTion(), friend2.descriptTion() , friend3.descriptTion(), friend4.descriptTion())

//  ======== JS oop sub class and inheritance ==========;
class Customer {                        // Base class 
    constructor(fname, addrs){
        this.firstName = fname
        this.address = addrs
    }
}
// let customer1 = new Customer('Abdul Hai', 'Feni')
// console.log(customer1);

class Businessman extends Customer{           // Sub class
    constructor(fname,addrs, phone, mail){
        super(fname, addrs)
        this.phoneNum = phone
        this.mailAddress = mail
    }
    info(){
        return (`Hello Mr. ${this.firstName} from ${this.address}`)
    }
};
let businessman1 = new Businessman('Rashid', 'Feni', 0235646, 'inforashid@.com')
let result = businessman1.info()
console.log(result)


// ekhane customer nam er jei base class ta ache seita k BusinessMan namok class e inherit korlam and process is called inheritance.


// ============== static function in javascript OOP =======
class Aboutme {
    constructor(name, age, dob, height, weight, blood){
        this.fullName = name
        this.myage = age
        this.dateOfBirth = dob
        this.myHeight = height
        this.myWeight = weight
        this.bloodGrp = blood
    }
    static allME(){
        console.log(`this is ${this.fullName} official information!`)
    }
};
let me = Aboutme.allME()

// static function allways call with class template(Aboutme.allME()).
