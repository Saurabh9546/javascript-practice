
Student_Array = [
    { name: "Saurabh Kumar Srivastav", marks: 75},
    { name: "Rudra", marks: 94},
    {name: "Akhil", marks: 45}
]

function Pass_Fail(student){
    if(student.marks >=50){
        console.log(student.name + " : Pass");
        
    }
    else {
        console.log(student.name + " : Fail");
        
    }
}

for(let i=0; i<Student_Array.length; i++){
    Pass_Fail(Student_Array[i])
}