"use strict ";
let main = document.getElementById("main");
let myForm = document.getElementById("employeesForm");
let emolooyesInfo = document.getElementById("emolooyesInfo");
const employees = [];
function Employee(Department, numberOfEmployees, avgSalary) {
  this.Department = Department;
  this.numberOfEmployees = numberOfEmployees;
  this.avgSalary = avgSalary;
  employees.push(this);
}

// ==== adding event listener for the form ===
///===================================
myForm.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
  event.preventDefault();
  let Department = event.target.Department.value;
  let numberOfEmployees = event.target.numberOfEmployees.value;
  let avgSalary = event.target.avgSalary.value;

  let newEmployee = new Employee(Department, numberOfEmployees, avgSalary);

  newEmployee.TableRender();
}

//====== render prototype function ======
// ==================
let TotalNumber = 0;
let avgSalaryOfAllDep = 0;
Employee.prototype.TableRender = function () {
  TotalNumber = TotalNumber + parseInt(this.numberOfEmployees);
  avgSalaryOfAllDep = (avgSalaryOfAllDep + parseInt(this.avgSalary)) / 4;
  let totalSalarys = avgSalaryOfAllDep * TotalNumber;

  let tableRow = document.createElement("tr");
  emolooyesInfo.appendChild(tableRow);

  let debartmentName = document.createElement("td");
  debartmentName.textContent = this.Department;
  console.log(this);

  tableRow.appendChild(debartmentName);
  console.log(this.avgSalary);

  let numberOfEmp = document.createElement("td");
  numberOfEmp.textContent = this.numberOfEmployees;
  tableRow.appendChild(numberOfEmp);

  let avgSalary = document.createElement("td");
  avgSalary.textContent = this.avgSalary;
  tableRow.appendChild(avgSalary);

  let totalSalary = document.createElement("td");
  totalSalary.textContent = this.avgSalary * this.numberOfEmployees;
  tableRow.appendChild(totalSalary);
  //==================
  //==================
  let tableRow2 = document.createElement("tr");
  emolooyesInfo.appendChild(tableRow2);

  let TotalWord = document.createElement("td");
  TotalWord.textContent = "total";
  tableRow2.appendChild(TotalWord);
  console.log(TotalWord.textContent);

  let TotalNumberOfEmployees = document.createElement("td");
  TotalNumberOfEmployees.textContent = TotalNumber;
  tableRow2.appendChild(TotalNumberOfEmployees);

  let avgSalaryOfDepartments = document.createElement("td");
  avgSalaryOfDepartments.textContent = avgSalaryOfAllDep;
  tableRow2.appendChild(avgSalaryOfDepartments);

  let totalSalaryOfDepartments = document.createElement("td");
  totalSalaryOfDepartments.textContent = totalSalarys;
  tableRow2.appendChild(totalSalaryOfDepartments);
};



for (let i = 0; i < employees.length; i++) {
  employees[i].render();
}

