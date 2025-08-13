/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var assetPartition = area / 2;
console.log(assetPartition);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
    console.log('Laptop');

}

else {
    if (money >= 10000) {
        console.log('Cycle');
    }

    else {
        console.log('Chocolate');
    }

}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var day = 1; day <= lastDay; day++) {
    if (day % 3 === 0) {
        console.log(day + ' - medicine')
    }
    else {
        console.log(day + ' - rest')
    }
}


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";

//write your code here

if (fileName.startsWith('#')) {
    console.log('Store');
}
else if (fileName.endsWith('.pdf')) {
    console.log('Store');
}
else if (fileName.endsWith('.docx')) {
    console.log('Store');
}
else {
    console.log('Delete');
}


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

var phEmail = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(phEmail);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var incrumentRate = 5;
var currentSalary = startingSalary * Math.pow(1 + incrumentRate / 100, experience);
console.log(currentSalary.toFixed(2));
