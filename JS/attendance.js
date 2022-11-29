let student=JSON.parse(localStorage.getItem('student'))
console.log(student);

let table1 = '<table border=2>';
    table1 += '<tr><th>ID </th><th> student name</th><th>total day</th><th>absont</th></tr>';
    student.map( ele => {
        var ID = ele.id;
        var NAME = ele.nameStudent;
        var totalDay = ele.totalDay;
        var absont = ele.absont;
      
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `${ID}` + '</td>',
        table1 = table1 + '<td>' + `${NAME}` + '</td>',
        table1 = table1 + '<td>' + `${180}` + '</td>',
        table1 = table1 + '<td>' + `${absont}` + '</td>',
        table1 = table1 + '<td>' + `<button id='' onclick='showAtten(${ID})'>add</button><button id='' onclick='showAtten(${ID})'>decrease</button>` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;


function addAttendance(){

    let table1 = '<table border=2>';
    table1 += '<tr><th>ID </th><th> student name</th><th>total day</th><th>absont</th></tr>';
    student.map( ele => {
        var ID = ele.id;
        var NAME = ele.nameStudent;
        var totalDay = ele.totalDay;
        var absont = ele.absont;
      
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `${ID}` + '</td>',
        table1 = table1 + '<td>' + `${NAME}` + '</td>',
        table1 = table1 + '<td>' + `${180}` + '</td>',
        table1 = table1 + '<td>' + `${absont}` + '</td>',
        table1 = table1 + '<td>' + `<button id='' onclick='showAtten(${ID})'>add</button><button id='' onclick='decrease(${ID})'>decrease</button>` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;

}

//------------------------------------------------
function showAtten(ID){

    let studentId=ID
    console.log(studentId);


//-------------------------------------------    
student = student.map((ele) =>{
        if(ele.id == ID) {
            ele.absont += 1
        }
        return ele})
    
        localStorage.setItem("student", JSON.stringify(student));
        addAttendance()}
//--------------------------------------------
// for (let i = 0; i < student.length; i++) {
//     if (student[i].id === studentId) {
//         student[i].absont += 1;
//         console.log( absont.value);
//         console.log(false);

//        return;
//     }
//     }
// localStorage.setItem( 'student' , JSON.stringify(student))
// addAttendance()}
//--------------------------------------


// student.map((ele) =>{
    
//     //Find index of specific object using findIndex method. 
       
//     feedloc = student.findIndex((ele => ele.id == studentId ));

//     console.log(feedloc)


//     //Update object's name property.
//     student[feedloc].absont += 1
   


//     localStorage.setItem("student", JSON.stringify(student));
//     addAttendance()
// // var studentId=ID
// // console.log(studentId);
// // return studentId

// })}

//----------------------------------------------------

// var btnAdd=document.querySelector("#btnAdd")
// btnAdd.addEventListener("click",addAtte)

// function addAtte(event){

//  var studentId = showAtten(ID)
//  console.log(studentId);

// let totalDay=document.getElementById(`totalDay`)
// let absont=document.getElementById(`absont`)

// let student=JSON.parse(localStorage.getItem('student'))

// for (var i = 0; i < student.length; i++) {
//     if (student[i].id === studentId) {
//         student[i].totalDay = totalDay.value;
//         student[i].absont = absont.value;
//         console.log( absont.value);
//         console.log(false);
//         break;
//     }
//     }
//     localStorage.setItem("student", JSON.stringify(student));

//     addAttendance()
//     event.preventDefault();

// }

function decrease(ID){

    let studentId=ID
    console.log(studentId);


//-------------------------------------------    
student = student.map((ele) =>{
        if(ele.id == ID) {
            ele.absont -= 1
        }
        return ele})
    
        localStorage.setItem("student", JSON.stringify(student));
        addAttendance()}