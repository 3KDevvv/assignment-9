document.getElementById("calculate").addEventListener("click", function() {

let sub1 = document.getElementById("sub1").value;
let sub2 = document.getElementById("sub2").value;
let sub3 = document.getElementById("sub3").value;

sub1 = Number(sub1);
sub2 = Number(sub2);
sub3 = Number(sub3);

let average = (sub1 + sub2 + sub3) / 3;

let grade;

if(average >= 90) {
    grade = "A";
} else if(average >= 80) {
    grade = "B";
} else if(average >= 70) {
    grade = "C";
} else if(average >= 60) {
    grade = "D";
} else {
    grade = "F";
}

document.getElementById("average").innerHTML = "Average: " + average.toFixed(2);
document.getElementById("grade").innerHTML = "Grade: " + grade;



});