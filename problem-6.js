/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var incrumentRate = 5;
var currentSalary = startingSalary * Math.pow(1 + incrumentRate / 100, experience);
console.log(currentSalary.toFixed(2));
