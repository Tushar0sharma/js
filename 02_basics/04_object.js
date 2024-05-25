// const tinderuser =new Object()
const tinderuser={}

// console.log(tinderuser)

tinderuser.id="tushu"
tinderuser.name="tushar"
tinderuser.islogged=false

// console.log(tinderuser)

const user={
    email:"devslane@email.com",
    fullname:{
        userfullname:{
            firstname:"dev",
            lastname:"slane"
        },
        usershortname:{
            name:"Tushar"
        }
    }
}

// console.log(user["fullname"]["usershortname"])
// console.log(user.fullname.usershortname)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// +++++++++++ to merge two objects+++++ \\

// const obj3=Object.assign({},obj1,obj2)

//spread operators to merge
obj3={...obj1,...obj2};

// console.log(obj3)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('name'))