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
console.log(typeof myfunction)