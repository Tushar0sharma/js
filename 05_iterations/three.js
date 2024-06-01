//for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)
// }
// const greeting="hello world"
// for(const greet of greeting){
//     if(greet==" " ) break
//     console.log(greet)
// }

//maps

const map=new Map()
map.set('IN',91)
map.set('pk',92)

// console.log(map)

for (const [idx,i] of map) {
    console.log(idx)
}