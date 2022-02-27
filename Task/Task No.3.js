//Task 3: 
// Simple Programs todo for Condition , Looping and Arrays

//1.Write a loop that makes seven calls to console.log to output the following triangle:
let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);


//2.Iterate through the string array and print it contents
var strArray= ["Jazz","Blues","New Age","Classical","Opera"]
console.log(strArray)


//3.write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55]
console.log(myarray.length);


// 4.Create an array called foods holds the names of your top 20 favorite foods,
// starting with the best food.
let food=["rice","dal","chapathi","pizza","biriyani","burger","gheerice","tandoori",
"naan","paneet pulao","chettinadchicken","poori","dosa","idly",
"pongal","curdrice","panipoori","muttoncurry","fishfinger","prawn"]


//5. How can you find your fifth favorite food?
let food=["rice","dal","chapathi","pizza","biriyani","burger","gheerice","tandoori",
"naan","paneet pulao","chettinadchicken","poori","dosa","idly",
"pongal","curdrice","panipoori","muttoncurry","fishfinger","prawn"]
console.log(food.[5])


//6.Find the length of your foods array
let food=["rice","dal","chapathi","pizza","biriyani","burger","gheerice","tandoori",
"naan","paneet pulao","chettinadchicken","poori","dosa","idly",
"pongal","curdrice","panipoori","muttoncurry","fishfinger","prawn"]
console.log(food.length)


