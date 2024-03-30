/*Prompt the user to input the following student marks
- A - 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.
*/
let marks=prompt("Enter student marks(between 0 and 100):");
//Convert the marks to a number
marks = parseFloat(marks);
//Check if number input id a valid number
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input. Insert a number between 0 and 100.")
} else {
//determine the grade based on the marks input
let grade;
if (marks > 79) {
  grade="A"
} else if (marks >= 60 && marks) {
  grade="B"
} else if (marks >= 50) {
  grade="C"
} else if (marks >= 40) {
  grade="D"
} else {
  grade="E"
}
//Output the grade
console.log("Grade:"+grade)
}