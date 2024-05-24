// primitive

// 7 types : String ,number,Boolean,null,undefined,symbol,bigint

const score=100
const scorevl=100.2

const logged=false
const outsidetemp=null;
let usermail;

const id=Symbol("34")
const id1=Symbol("34")

// console.log(id==id1)

const bignum=747612074n;
// console.log(bignum)

//reference (non-primitive)

//Array,object,function

const heros= ["shakiman","naagraj","doga"];  //array
let myobj={
    name:"Tushar",
    age:19
} //object
// console.log(heros)

const myfunction=function(){
    console.log("Hello World")
}
// console.log(typeof myfunction)


//+++++++++++++++++++++++++++++++++++++++++\\

//stack(primitive)(copy),heap(non-primitive)(reference)

let myytname="tushar"

let anothername=myytname
anothername="sharma"

// console.log(anothername)  //primitive
// console.log(myytname)     //primitive

let userone={
    name:"Tushar",
    upi:"tushar@upi"
}

let usertwo=userone;
usertwo.upi="sharma@upi"

// console.log(userone.upi)    //changes int heap that's why both are changed   
// console.log(usertwo.upi)