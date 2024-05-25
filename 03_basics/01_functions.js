
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
let ans=loginuser()
console.log(ans)