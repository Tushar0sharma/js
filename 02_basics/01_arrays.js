//arrays

const arr=[0,1,2,3,4,5,"sharma",true]
const heros=['shubhash chandra bose',"chandra shekhar azad"]

const arr2=new Array(23,212,3,123)

//array methods
// heros.push("sardar udham singh")
// heros.pop("sardar udham singh")

// arr2.unshift(9)
// arr2.shift()
// arr2.shift()
// console.log(arr2.includes(212))
// console.log(arr2.indexOf(23))

// const newarr=arr2.join()

// console.log(typeof newarr);
// console.log(typeof arr2);

//slice , splice,difference
const arrnew =[1,2,3,4,5,6,7]
console.log("A ",arrnew)

const myn1=arrnew.slice(1,3)
console.log(myn1)

console.log("after slicing the values of array remain unchanged")
console.log("B ",arrnew)

const myn2=arrnew.splice(1,3)
console.log(myn2)

console.log("after splicing the values of array are changed")
console.log("C ", arrnew)


