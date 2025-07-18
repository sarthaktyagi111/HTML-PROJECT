// function greetall(){
//     console.log("hello all");
// }
// function greet(){
//     console.log("hello world");
//     greetall();
// }
// greet();
let arr = [
    function(a,b){
        return a+b;    
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]
let summision = arr[0];
console.log(summision(20,30));
const sub = arr[1];
console.log(sub(20,5));