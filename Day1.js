console.log("I am starting javascript Today");
let myName = "Saurabh_Kumar_Srivastav"
let age = 13
let myCollege = "Dumka_Engineering_College"

console.log(myName)
console.log(age)
console.log(myCollege)

if (age >= 18) {
    console.log("I am adult")
}
else{
    console.log("I am not adult")
}

// if else

let marks = 55

if (marks >=95){
    console.log("Grade A");
}
else if (marks >= 75){
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("grade D");
}

// Loops

for(let j = 0; j<=10; j++){
    console.log(j);
    
}

for(let i = 10; i>=1; i--){
    console.log(i);
}

for(let k=0; k<=20; k++){
    if(k%2==0){
        console.log(k)
    }
}

// Functions

function greet(name){
    console.log("Hello " + name);
    
}
greet("Saurabh")
greet("JavaScript")

function twoNumber(a,b){
    let s = a+b
    console.log("Sum is " + s);
    
}
twoNumber(36, 66);

function evenOdd(a){
    if(a%2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
evenOdd(43)

let course = ["DSA", "JavaScript", "Java", "python"]

console.log(course[0]);
console.log(course[1]);
console.log(course[2]);
console.log(course[4-1]);
console.log(course.length);
course.push("ReactJs", "NodeJS", "NextJs", "MongoDB");
console.log(course);

course.pop();
console.log(course.length);


for(let i = 0; i<=course.length; i++){
console.log(course[i]);
}

// Object

let student = {
    name: "Saurabh Kumar Srivastav",
    age: 23,
    college: "Dumka Engineering College",
    city: "Dumka",
    isPlaced: true

}

for(let key in student){
    console.log(key + " : " + student[key]);
}