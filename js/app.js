// function sum(){
  //  let a = 20;
  //  let b = 30;
  //  document.write(a+b);
//}
// sum();

// function printUserName(){
 //   document.write(`Sami`);
//}
//printUserName();

function printUserName(username){
   document.write(username);

}
printUserName(`Syed`);
printUserName(`Omer`);
printUserName(`Shahriar`);

//let printUserName = (username)=>{
   // document.write(username);
//}
//printUserName(`Syed`);
//printUserName(`Omer`);
//printUserName(`Shahriar`);

//let num1 = Number(prompt());
//let num2 = Number(prompt());
//document.write(num1+num2);
let a =50;
let b =51;
document.write(a < b);

let c ='Shahriar';
let d ='Sami';
document.write(`My first name is ${c}My last name is ${d}`);

let num = Number(prompt(`Enter Number`))

if (num / 2 === 5){
    document.write(` True `)
}
else{
    document.write(` False `)
};

let examNumber = 100;
if(examNumber >= 80 && examNumber <= 100){
    document.write(` A+ `)
}
else if(examNumber >=70 && examNumber<80){
    document.write(` A `)
}
else if(examNumber >=60 && examNumber<70){
    document.write(` A- `)
}
else if(examNumber >=50 && examNumber<60){
    document.write(` B `)
}
else if(examNumber >=40 && examNumber<50){
    document.write(` C `)
}
else if(examNumber >=33 && examNumber<40){
    document.write(` D `)
}
else if(examNumber >=0 && examNumber<33){
    document.write(` F `)
}
else{
    document.write(` Invalid Number `)
}




