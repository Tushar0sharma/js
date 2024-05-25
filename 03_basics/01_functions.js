
function saymyname(){
    console.log("t")
    console.log("u")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("r")
}
// saymyname()

function addtwonum(num1,num2){
    // console.log(num1+num2)

    // let result=num1+num2
    // return result

    return num1+num2
}
const result=addtwonum(2,8)
// console.log(result)

function loginuser(username="sam"){
    if(!username){
        console.log("Please enter a username")
    }
    else
    return `${username} just logged in`
}
// let ans=loginuser()
// console.log(ans)

function calculatecartprice(val1,...num1){
    return num1;
}
// console.log(calculatecartprice(122,34,221))

const user={ 
    user:"tushar",
    price:"3883"
}

function handleuser(anyobj){
    console.log(`username is ${anyobj.user} and price is ${anyobj.price}`)
}
// handleuser(user)

mynewarr=[12,34,23,4,2,344]

function returnsecondval (anyarr){
    return anyarr[1]
}

// console.log(returnsecondval(mynewarr))
