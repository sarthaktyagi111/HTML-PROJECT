// function printcnt(num){
//     for(let i=1;i<=num;i+=1){
//         console.log("The number is: " ,i );
//     }
// }
// printcnt(7);
// const getexpo = (x,y)=>{
//     let exp = x**y;
//     return exp;
// }
// console.log(getexpo(2,3))
// let arr1 = [1 ,2 ,3 ,4];
// console.log(arr1);

// let arr2 = new Array("sarthak" , 99 , "tyagi");

// arr2.push(7);
// arr2.push(true);
// // console.log(arr2.splice(1 , 0 , "dhiru"));
// console.log(arr2);
// let arr = [10 , 20 ,30 , "sarthak" , null , 'yesiam' , true];
// arr.map((num , x) => {
//     console.log(num+1 , x);
// })
// 
// let arr = [1,3,5,6,7];
// arr.forEach((value , index) =>{
//     console.log("value is: " , value , "index is: " , index);
// }

// )
// let getxp = ()=>{
//     console.log("hello everyone");
// }
// getxp();
let arr = [20,40,60,80,100];

let getsum = function(arr){
    let sum = 0;
    arr.forEach((value) =>{
        sum = sum+value;
    })
    return sum;

}
let summision = getsum(arr);
console.log(summision);

