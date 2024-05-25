//immediately invoked function expressions(iife)
(function chai(){
    console.log(`DB CONNECTED`)
})();  //named iife

((name)=>{
    console.log(`DB CONNECTED two ${name}`)
})('tushar')