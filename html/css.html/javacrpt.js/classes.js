// class human{
//     age = 13;
//     #weight = 40;
//     height = 150;

//     // behaviou
//     walking(){
//         console.log("I am walking");
//     }
//     constructor(newage , newht , newwt){
//         this.age = newage;
//         this.height = newht;
//         this.#weight = newwt;
//     }
//     get wgt(){
//         return this.#weight;
//     }
//     set setwgt( val){
//         this.#weight = val;
//     }

// }
// let obj1 = new human(4 , 7 , 90);
// console.log(obj1.wgt);
// obj1.walking();

// function sayname(firstname = "sarthak" , lastname = firstname.toUpperCase()){
//     console.log("my name is" , " " ,firstname , " " , lastname);
// }
// sayname()

// function num(count = 90){
//     return count;
// }
// function person(name , age){
//     console.log(name , " " , age);
// }
// person("babbar" , num(5));

// let newdate = new Date(2006 , 6 , 25 , 8);
// console.log(newdate.setDate(28));
// console.log(newdate);
console.log("hi")
try{
    console.log("try will start from here");
    console.log(x);
    console.log("can not be printed" );
}
catch(e){
    throw new Error("have shame , first write decleration of x")
}
finally{
    console.log("i will always print")
}