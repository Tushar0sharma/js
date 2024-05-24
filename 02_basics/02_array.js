const marvel=["thor","ironman","spiderman"]
const dc=["flash","superman","batman"]

// marvel.push(dc)

// console.log(marvel)
// console.log(marvel[3][1])

// const allheros=marvel.concat(dc)
// console.log(allheros)

//spread operator

const allheros=[...marvel,...dc]
// console.log(allheros)

const anotherarr=[1,2,3,[1,2,3,4],3,5,[2,3,56,4]]
const realarr=anotherarr.flat(1)
// console.log(realarr)

 console.log(Array.isArray("Tushar"))
 console.log(Array.from("Tushar"))
 console.log(Array.from({name :"Tushar"}))     //interesting


 let score1=100;
 let score2=200;
 let score3=300;

 console.log(Array.of(score1,score2,score3))
