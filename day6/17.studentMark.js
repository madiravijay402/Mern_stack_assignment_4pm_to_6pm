let studentMarks=[{name:"sudhan",marks:80},
{name:"ravi",marks:60},
{name:"kumar",marks:25},
{name:"suresh",marks:90},
{name:"raju",marks:30}]

let namesFilter=studentMarks.filter((student)=>student.marks>70);

console.log("marks greater thsn 70 :",namesFilter);

// passed 
let passed =studentMarks.filter((student)=>student.marks>=35)
console.log("passed students:",passed);
// 

let firstFailed=studentMarks.find((student)=>student.marks<35);
console.log("first failed:",firstFailed);

let average=studentMarks.reduce((acc,cur)=>acc+cur.marks,0)/studentMarks.length;
console.log("average marks :",average);
