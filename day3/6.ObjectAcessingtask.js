const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
};

// name
console.log(student.name);

// course
console.log(student.course);

// age
let key="age";
console.log(student[key]);

// using for loop
for(let key in student){
    if(key==="course"){
        console.log("course",student[key]);
    }
}