//Task 1: Simple Programs todo for variables


//1. Declare four variables without assigning values and print them in console
var a;
    console.log(a);
var b;
    console.log(b);
var c;
    console.log(c);
var d;
    console.log(d);


//2.How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let ID= {
"first_name":"Nandhakumar",
"last_name":"R",
"marital_status":"singel",
"country":"India",
"age":"26"
}
console.log(ID)

//4. Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname="Nandhakumar",lastname="R",maritalstatus="single",country="india",age="26";


//5.Declare variables and assign string, boolean, undefined and null data types
var a=("NANDHU");
var b=true;
var c=undefined;
var d=null;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

//6.Convert the string to integer
let a="i am 20 years old"
let b = "you are 30 years old"
console.log(parseInt(a))
console.log(Number(a))
console.log(+(a))
console.log(parseInt(b))
console.log(Number(b))
console.log(+(b))


//7.Write 6 statement which provide truthy & falsey values.
console.log(11===11);
console.log(11===5);
console.log(11!=5);
console.log(11!=11);
console.log(11>=5);
console.log(11<=5);