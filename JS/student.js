
let student = JSON.parse(localStorage.getItem('student')) || [ ]

var btnAdd=document.querySelector("#btnAdd")
btnAdd.addEventListener("click",addStudent)
let idStudent=document.getElementById(`idStudent`)
let nameStudent=document.getElementById(`nameStudent`)
//------------------------------------------------------
let table1 = '<table border=2>';
    table1 += '<tr><th>ID </th><th> student name</th><th></tr>';
    student.map( ele => {
        var ID = ele.id;
        var NAME = ele.nameStudent;
      
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `${ID}` + '</td>',
        table1 = table1 + '<td>' + `${NAME}` + '</td>',
        table1 = table1 + '<td>' + `<button id='deleteStudent' onclick='removeObjectWithId(${student,ele.id})'>delete</button>` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;
//-------------------------------------------------------
function addStudent(event){
    let obj = {
        'id':idStudent.value,
        'nameStudent':nameStudent.value,
        'totalDay':"",
        'absont':0,
    }

    student.push(obj)

    localStorage.setItem("student",JSON.stringify(student))
    console.log(student)
    event.preventDefault();


    table()
    }
//---------------------------------------------------------

function table(){
        let table1 = '<table border=2>';
    table1 += '<tr><th>ID </th><th> student name</th><th></tr>';
    student.map( ele => {
        var ID = ele.id;
        var NAME = ele.nameStudent;
      
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `${ID}` + '</td>',
        table1 = table1 + '<td>' + `${NAME}` + '</td>',
        table1 = table1 + '<td>' + `<button id='deleteStudent' onclick='removeObjectWithId(${ID})'>delete</button>` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;
    }


//--------------------------------------------------

function removeObjectWithId(ID) {
        let studentId=ID

        const index = student.findIndex((ele) => ele.id == studentId);
        student.splice(index, 1);
        localStorage.setItem("student",JSON.stringify(student))
        table()
        }
              
//-------------------------------------------
