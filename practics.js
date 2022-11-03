let array = [1,2,3,4,5,6];
let arr = array.map(element=>element + 30);
document.write(arr);

document.write("<br/>")

let a = [1,2,3,4,5,6,7];
let filtered = a.filter(element=>element===3 || element===6);
document.write(filtered);

document.write("<br/>")

let x = [7,5,3,4,2,6,1];
decend = x.sort((a,b) => a>b ? 1 : -1)
document.write(decend);

document.write("<br/>")

let num = [1,2,3,4,5];
num.forEach(element=> {
document.write(element);
});

document.write("<br/>")

let num1 = ["a","b","c","d"];
let num2 = [1,2,3,4];
document.write(num1.concat(num2));

document.write("<br/>")

let num3 = [1,2,3,4,5,6];
let ali = num3.every(num3 => num3 < 7);
document.write(ali);

document.write("<br/>")

let arry = new Array(4);
document.write(arry);
document.write(arry.fill(5));

document.write("<br/>")

let aray = [1,2,3,4,5,6,7,8];
aray.reverse();
document.write(aray);

document.write("<br/>")

let num4 = [1,2,3,4,5,6];
let found = num4.find(element=> element < 4);
document.write(found);

document.write("<br/>")

let num5 = ["Johan", "Faran", "Sondip", "Jon", "Bon"];
let finder = num5.findIndex(element=> element === "Sondip");
document.write(finder);

document.write("<br/>")

document.write(Array.from("Pakista"));
document.write("<br/>")
document.write(Array.from([7, 2, 3], x=> x+x));

document.write("<br/>")

let num6 = [1,2,3,4,5,6,7,8,9];
let inclu = num6.includes(11);
document.write(inclu);

document.write("<br/>")

let num7 = [1,2,3,4,5,6];
let result = Array.isArray(num7);
document.write(result);

document.write("<br/>")

let num8 = ["B","a","n","g","l","d","s","h"];
let result1 = num8.join("");
document.write(result1);

document.write("<br/>")

let num9 = ["mahi", "sakib", "opu", "puja", "bubly"];
let result3 = num9.pop();
document.write(result3);

document.write("<br/>")

let num10 = ["mahi", "sakib", "opu", "puja", "bubly"];
let result4 = num10.push("sabnur");
document.write(result4);

document.write("<br/>")

let num11 = ["Apple","Mango","Banana"];
let result5 = num11.shift();
document.write(result5);

document.write("<br/>")

let num12 = ["Apple","Mango","Banana"];
let result6 = num12.unshift("paynapel");
document.write(result6);

document.write("<br/>")

let num13 = [1,2,3,4,5,6,7];
let result7 = num13.slice(2);
document.write(result7);

document.write("<br/>")

let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
document.write(months);

document.write("<br/>")

// Write a program for concatenation two array (using spread operator)

let num15 = ["Rice","Jute","Kokonut"];
let num16 = ["Mango","Banana","Paynapale"];
let num17 = [55,88,90];
let result10 = [...num15, ...num16, ...num17];
document.write(result10);



