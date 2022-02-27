// Task 2: 
// Simple Programs todo for Operators


//1.Square of a number
let a=5
let b= a**11
console.log(b)


//2.Swapping 2 numbers
let a=5;
let b=11;
[a,b]=[b,a];
console.log(a);
console.log(b);


//3.Addition of 3 numbers
let a=5
let b=5
let c=6
console.log(a+b+c)


//4.Celsius to Fahrenheit conversion
let celsius=56
const f = celsius * 1.8 + 32
console.log(f)


//5.Meter to miles
let meter=11
let miles=meter*0.00062137
console.log(miles)


//6.Pounds to kg
const kg=2.205;
var pounds=40;
console.log(pounds/kg);


//7.Calculate Batting Average
var totalruns=500;
var totalbattings=42;
const average=(totalruns/totalbattings);
console.log(average);


 //8.Calculate five test scores and print their average
let a=91
let b=83
let c=94
let d=91
let e=99
let average=(a+b+c+d+e)/5
console.log(average)


//9.Power of any number x ^ y
var a=5;
var b=11;
let c=Math.pow(a,b)
console.log(c)


//10.Calculate Simple Interest
let p=50000
let n=1
let r=23
let SI = (p*n*r)/100
console.log(SI)


//11.Calculate area of an equilateral triangle
let a=11
let anequilateralTriangle = ( 1.73 * a *a) / 4
console.log(anequilateralTriangle)


//12.Area Of Isosceles Triangle
const a=5;
const base=11;
const area=(1/2.0)*base*Math.sqrt((a*a)-((base*base)/4));
console.log("Area of Isosceles Triangle = " + area);


//13.Volume Of Sphere
let radius = 5;
let volumePOfSphere = (4/3)* Math.PI * Math.pow(radius, 3);
console.log(volumePOfSphere)


//14.Volume Of Prism
let l=5;
let w=6;
let h=11;
const volume=l*w*h
console.log(volume);


//15.Find area of a triangle.
let b=5
let h=6
let areaOfTriangle=(1/2)* b * h
console.log(areaOfTriangle)


//16.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost=1000
let soldCost=875
let discountOfProduct=actualCost-soldCost
console.log(discountOfProduct)


//17.Given their radius of a circle and find its diameter, circumference and area.
let r=7
let diameterOfCircle = 2 * r
let circumferenceOfCircle= 2 * Math.PI * r
let areaOfCircle = Math.PI * r * r
console.log(diameterOfCircle)
console.log(circumferenceOfCircle)
console.log(areaOfCircle)


//18.Given two numbers and perform all arithmetic operations.
let a=5;
let b=11;
const add=a+b;
const sub=a-b;
const multiply=a*b;
const div=a/b;
const modulus=a%b;
console.log([add,sub,multiply,div,modulus]


//19.Display the asterisk pattern as shown below(No loop needed)
let a6=["*","*","*","*","*"]
a6.map((e)=>{
    d0=e+e+e+e+e
console.log(d0)
})


//20.Calculate electricity bill? //per hour 100watt,per unit10rs
let unitPerHourInWatt=100
let hour=1
let unitRate=10
let kWh=(unitPerHourInWatt * hour)/1000
let monthUsage=30*kWh
let costOfBill=unitRate*monthUsage
console.log(costOfBill)


//21.Program To Calculate CGPA
let m3=77
let fm=87
let som=56
let md=91
let fea=92
let CGPA=(m3+fm+som+md+fea)/5
console.log(CGPA)

