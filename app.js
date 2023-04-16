"use strict ";
let main = document.getElementById("main");
// let container = document.getElementById("container");
let myForm = document.getElementById("employeesForm");
let cardContainer = document.getElementById("cardContainer");

const employees = [];
function Employee(fullName, Department, Level, image_URL) {
  this.idNumber();
  this.fullName = fullName;
  this.Department = Department;
  this.Level = Level;
  this.img = image_URL;
  this.calculateSalary();
  employees.push(this);
}

///====calculating the salary && the net salary===
//===============

Employee.prototype.calculateSalary = function () {
  if (this.Level === "Senior") {
    let salaryForSenior = Math.floor(Math.random() * (2000 - 1500) + 1500);
    let taxForSenior = 0.07 * salaryForSenior;
    this.Salary = salaryForSenior - taxForSenior;
  }

  if (this.Level === "Mid-Senior") {
    let salaryForMidSenior = Math.floor(Math.random() * (1500 - 1000) + 1000);
    let taxForMidSenior = 0.07 * salaryForMidSenior;
    this.Salary = salaryForMidSenior - taxForMidSenior;
  }

  if (this.Level === "Junior") {
    let salaryForJunior = Math.floor(Math.random() * (1000 - 500) + 500);
    let taxForJunior = 0.07 * salaryForJunior;
    this.Salary = salaryForJunior - taxForJunior;
  }
};

///
// ==== adding event listener for the form ===
///===================================
myForm.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
  event.preventDefault();
  let employeeName = event.target.employeeName.value;
  let Department = event.target.Department.value;
  let Level = event.target.Level.value;
  let ImageURL = event.target.avatarimage.value;

  let newEmployee = new Employee(employeeName, Department, Level, ImageURL);
  newEmployee.render();
  saveData(employees);
}

// ================ ID NUMBER GENRATER =============
Employee.prototype.idNumber = function () {
  let id = Math.floor(Math.random() * (2000 - 1000) + 1000);
  this.Employee_Id = id;
  console.log(this.Employee_Id);
};
// Employee.prototype.idNumber()

//====== render prototype function ======
// ==================
Employee.prototype.render = function () {
  // let cardDiv = document.createElement("div");

  let Administration = document.getElementById("Administration");
  let Marketing = document.getElementById("Marketing");
  let Development = document.getElementById("Development");
  let Finance = document.getElementById("Finance");

  console.log(this);
  const EmployeeId = document.createElement("h2");
  EmployeeId.textContent = this.Employee_Id;
  const fullName = document.createElement("h2");
  fullName.textContent = this.fullName;
  const Department = document.createElement("h2");
  Department.textContent = this.Department;
  const Level = document.createElement("h2");
  Level.textContent = this.Level;

  const image_URL = document.createElement("img");
  image_URL.src = this.img;
  image_URL.height = 400;

  const Salary = document.createElement("h2");
  Salary.textContent = `Salary: ${this.Salary} jd`;
  console.log(this.Department);

  if (this.Department === "Administration") {
    let cardDiv = document.createElement("div");
    cardDiv.id = "xxx";
    console.log(this.Department);
    cardDiv.appendChild(image_URL);
    cardDiv.appendChild(EmployeeId);
    cardDiv.appendChild(fullName);
    cardDiv.appendChild(Department);
    cardDiv.appendChild(Level);
    cardDiv.appendChild(Salary);
    Administration.appendChild(cardDiv);
  } else if (this.Department === "Marketing") {
    let cardDiv = document.createElement("div");
    cardDiv.id = "xxx";

    console.log(this.Department);
    cardDiv.appendChild(image_URL);
    cardDiv.appendChild(EmployeeId);
    cardDiv.appendChild(fullName);
    cardDiv.appendChild(Department);
    cardDiv.appendChild(Level);
    cardDiv.appendChild(Salary);
    Marketing.appendChild(cardDiv);
  } else if (this.Department === "Development") {
    let cardDiv = document.createElement("div");
    cardDiv.id = "xxx";

    console.log(this.Department);
    cardDiv.appendChild(image_URL);
    cardDiv.appendChild(EmployeeId);
    cardDiv.appendChild(fullName);
    cardDiv.appendChild(Department);
    cardDiv.appendChild(Level);
    cardDiv.appendChild(Salary);
    Development.appendChild(cardDiv);
  } else {
    let cardDiv = document.createElement("div");
    cardDiv.id = "xxx";

    cardDiv.appendChild(image_URL);
    cardDiv.appendChild(EmployeeId);
    cardDiv.appendChild(fullName);
    cardDiv.appendChild(Department);
    cardDiv.appendChild(Level);
    cardDiv.appendChild(Salary);
    Finance.appendChild(cardDiv);
  }

  cardContainer.append(Administration);
  cardContainer.append(Marketing);
  cardContainer.append(Finance);
  cardContainer.append(Development);
};

function saveData(data) {
  let stringifyData = JSON.stringify(data);
  localStorage.setItem("employees", stringifyData);
}

function getData() {
  let retrievedData = localStorage.getItem("employees");
  let arrayData = JSON.parse(retrievedData);
  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
      new Employee(
        arrayData[i].fullName,
        arrayData[i].Department,
        arrayData[i].Level,
        arrayData[i].img
      );
      employees[i].render();
    }
  }
}

for (let i = 0; i < employees.length; i++) {
  employees[i].render();
}

getData();
