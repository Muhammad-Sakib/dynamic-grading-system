
function calculateGrade(marks,grade){
    var marks = document.getElementById(marks).value;
    if(marks < 33){
        document.getElementById(grade).innerHTML = "F";
    }
    else if(marks < 60){
        document.getElementById(grade).innerHTML = "D";
    }
    else if(marks < 70){
        document.getElementById(grade).innerHTML = "C";
    }
    else if(marks < 80){
        document.getElementById(grade).innerHTML = "B";
    }
    else if(marks <=100){
        document.getElementById(grade).innerHTML = "A";
    }
}

function totalMarksAndGrade(){
    var banglaMarks = parseInt(document.getElementById("banglaMarks").value);
    var englishMarks = parseInt(document.getElementById("englishMarks").value);
    var ictMarks = parseInt(document.getElementById("ictMarks").value);
    var totalMarks = banglaMarks + englishMarks + ictMarks;
    document.getElementById("totalMarks").innerHTML = totalMarks;
    
    var marks = totalMarks / 3;
        if(marks < 33){
        document.getElementById("finalGrade").innerHTML = "F";
    }
    else if(marks < 60){
        document.getElementById("finalGrade").innerHTML = "D";
    }
    else if(marks < 70){
        document.getElementById("finalGrade").innerHTML = "C";
    }
    else if(marks < 80){
        document.getElementById("finalGrade").innerHTML = "B";
    }
    else if(marks <=100){
        document.getElementById("finalGrade").innerHTML = "A";
    }
}






