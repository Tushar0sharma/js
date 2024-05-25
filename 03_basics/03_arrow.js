const user={
    username:"Tushar",
    price:999,

    welcome:function(){
        console.log(`${this.username} ,how are you?`)
        console.log(this)
    }
}

// user.welcome()
// user.username="sharma"
// user.welcome()

// console.log(this)

// chai()
// function chai(){
//     let username="tushar"
//     console.log(this.username)
// }

// const chai= function(){
//     let username="tushar"
//     console.log(this.username)
// }
// chai()


// const chai= () =>{
//     let username="tushar"
//     console.log(this)
// }

// chai()


// ++++++++ implicit return  +++++++++\\
// const addtwo = (num1,num2) => num1+num2


// const addtwo = (num1,num2) => (num1+num2)


// const addtwo = (num1,num2) => {return num1+num2}

// const addtwo = (num1,num2) => ({Username:"tushar"})
// console.log(addtwo(3,4));

