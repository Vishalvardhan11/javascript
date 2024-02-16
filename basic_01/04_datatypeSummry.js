//premative Datatype 

// String , number , boolean , null , undefined , symbol

const isLogedIn=false
const outSideTemp=null
let userEmail="";

const id ="1234"

let anotherUserId=Symbol("1234")

console.log(id == anotherUserId);

//non-premative datatypes(refrence)

//array, objects , function

let array=["vishal", "arya", "avinash", "sonam", 'manu' ]

console.log(array);

let myObj= {

     Name: 'vishal',
     age: 23,

}

const isFunction= function(){
        console.log(myObj);
}

console.table(myObj);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//premeative(stack). , nonpremeative(heap)

let myYoutube ='point_Nemo05'

let anotherYoutube= myYoutube

anotherYoutube='arya@69'

console.log(anotherYoutube);

let fuser= {
    name: 'vishal',
    upi:  'vis@ybl'

}

let fuser2=fuser

fuser2="arya@ybl"
console.log(fuser);
console.log(fuser2);