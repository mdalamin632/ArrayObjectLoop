document.write("<br/>")

let object1 = {
    a:'anyone',
    b:50
};
for(let [key,value] of Object.entries(object1)){
    document.write(`${key}: ${value}`);
}

document.write("<br/>")

let object2 ={
    crop: 'Lives'
};
document.write(Object.hasOwn(object2,'crop'));

document.write("<br/>")

let object3 ={
    a: 'anything',
    b: 50,
    c: 'true',
    d: 'mango'
}

document.write(Object.keys(object3));

document.write("<br/>")

let object4 ={
    a: 'anything',
    b: 50,
    c: 'true',
    d: 'mango'
}
document.write(Object.values(object4));

document.write("<br/>")


// Write a program for merging two object (using spread operator)

let a = {
x: 'name',
y: 'name1'
}
let b = {
 1: 'test',
 2: 'test1'
}
let name ={
    ...a, ...b};
document.write(name);


// for loop program

for(i=1; i<=10; i++){
    if(i%2==00){
    }
    console.log(" "+i);
}

// for of loop program

let Array11 = ["mango", "banana", "paynaple"];
for(let x of Array11){
    console.log(Array11);
}

// for in loop program

let student = {
    name: 'sati',
    class: 8,
    age: 14
}
for(let x in student){
    console.log(`${x} => ${student[x]}`);
}