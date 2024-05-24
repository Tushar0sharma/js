//singleton
//object.create

//object literals

const mysym= Symbol("key1")//for interview

const jsuser={
    name:"Tushar",
    [mysym]:"mykey1",
    "full name":"Tushar Sharma",
    upi:"tushar@upi",
    email:"tushar@gmail",
    location:"Mathura"
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])

jsuser["email"]="Tushar@chatgpt.com"
// Object.freeze(jsuser)
jsuser["email"]="Tushar@msgpt.com"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello js user")
}
jsuser.greeting2=function(){
    console.log(`Hello js user ${this.name}`)
}
jsuser.greeting();
jsuser.greeting2();
console.log(jsuser)
