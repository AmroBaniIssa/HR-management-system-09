"use strict ";

let main = document.getElementById("main");
let emolooyesInfo = document.getElementById("emolooyesInfo");
const employeesTableArray = [];

function getData() {
  let retrievedData = localStorage.getItem("employees");
  let arrayData = JSON.parse(retrievedData);
  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
         employeesTableArray.push(arrayData[i]);
    }
   
  }
  tableRender();
  return employeesTableArray;
}
console.log(employeesTableArray);

// ====== Render the table======
// ===============================

function tableRender() {
  let numberOfAdministrEmplo = 0;
  let numberOfMarkitingEmplo = 0;
  let numberOfDevEmplo = 0;
  let numberOfFinanceEmplo = 0;
  let adminAvg = 0;
  let markitingAvg = 0;
  let devAvg = 0;
  let financeAvg = 0;
  for (let i = 0; i < employeesTableArray.length; i++) {
    if (employeesTableArray[i].Department === "Administration") {
      numberOfAdministrEmplo += 1;
      adminAvg += employeesTableArray[i].Salary;
    }
    if (employeesTableArray[i].Department === "Marketing") {
      numberOfMarkitingEmplo += 1;
      markitingAvg += employeesTableArray[i].Salary;
    }
    if (employeesTableArray[i].Department === "Finance") {
      numberOfFinanceEmplo += 1;
      financeAvg += employeesTableArray[i].Salary;
    }
    if (employeesTableArray[i].Department === "Development") {
      numberOfDevEmplo += 1;
      devAvg += employeesTableArray[i].Salary;
    }
  }

  if (numberOfAdministrEmplo != 0) {
    let tableRow1 = document.createElement("tr");
    emolooyesInfo.appendChild(tableRow1);
    let debartmentNameAdmin = document.createElement("td");
    debartmentNameAdmin.textContent = "Adminstration";
    let numberOfAdministrEmploValu = document.createElement("td");
    numberOfAdministrEmploValu.textContent = numberOfAdministrEmplo;
    console.log(numberOfAdministrEmplo);
    let avgSalaryAdmin = document.createElement("td");
    avgSalaryAdmin.textContent = adminAvg / numberOfAdministrEmplo;
    let debartmentTotalAdmin = document.createElement("td");
    debartmentTotalAdmin.textContent = adminAvg;
    tableRow1.appendChild(debartmentNameAdmin);
    tableRow1.appendChild(numberOfAdministrEmploValu);
    tableRow1.appendChild(avgSalaryAdmin);
    tableRow1.appendChild(debartmentTotalAdmin);
  }

  if (numberOfMarkitingEmplo != 0) {
    let tableRow1 = document.createElement("tr");
    emolooyesInfo.appendChild(tableRow1);
    let debartmentNameAdmin = document.createElement("td");
    debartmentNameAdmin.textContent = "Markiting";
    let numberOfAdministrEmploValu = document.createElement("td");
    numberOfAdministrEmploValu.textContent = numberOfMarkitingEmplo;
    let avgSalaryAdmin = document.createElement("td");
    avgSalaryAdmin.textContent = markitingAvg / numberOfMarkitingEmplo;
    let debartmentTotalAdmin = document.createElement("td");
    debartmentTotalAdmin.textContent = markitingAvg;
    tableRow1.appendChild(debartmentNameAdmin);
    tableRow1.appendChild(numberOfAdministrEmploValu);
    tableRow1.appendChild(avgSalaryAdmin);
    tableRow1.appendChild(debartmentTotalAdmin);
  }

  if (numberOfDevEmplo != 0) {
    let tableRow1 = document.createElement("tr");
    emolooyesInfo.appendChild(tableRow1);
    let debartmentNameAdmin = document.createElement("td");
    debartmentNameAdmin.textContent = "Development";
    let numberOfAdministrEmploValu = document.createElement("td");
    numberOfAdministrEmploValu.textContent = numberOfDevEmplo;
    let avgSalaryAdmin = document.createElement("td");
    avgSalaryAdmin.textContent = devAvg / numberOfDevEmplo;
    let debartmentTotalAdmin = document.createElement("td");
    debartmentTotalAdmin.textContent = devAvg;
    tableRow1.appendChild(debartmentNameAdmin);
    tableRow1.appendChild(numberOfAdministrEmploValu);
    tableRow1.appendChild(avgSalaryAdmin);
    tableRow1.appendChild(debartmentTotalAdmin);
  }

  if (numberOfFinanceEmplo != 0) {
    let tableRow1 = document.createElement("tr");
    emolooyesInfo.appendChild(tableRow1);
    let debartmentNameAdmin = document.createElement("td");
    debartmentNameAdmin.textContent = "Finance";
    let numberOfAdministrEmploValu = document.createElement("td");
    numberOfAdministrEmploValu.textContent = numberOfFinanceEmplo;
    let avgSalaryAdmin = document.createElement("td");
    avgSalaryAdmin.textContent = financeAvg / numberOfFinanceEmplo;
    let debartmentTotalAdmin = document.createElement("td");
    debartmentTotalAdmin.textContent = financeAvg;
    tableRow1.appendChild(debartmentNameAdmin);
    tableRow1.appendChild(numberOfAdministrEmploValu);
    tableRow1.appendChild(avgSalaryAdmin);
    tableRow1.appendChild(debartmentTotalAdmin);
  }

  if (numberOfFinanceEmplo != 0) {
    let tableRow1 = document.createElement("tr");
    emolooyesInfo.appendChild(tableRow1);
    let debartmentNameAdmin = document.createElement("td");
    debartmentNameAdmin.textContent = "Total";
    let numberOfAdministrEmploValu = document.createElement("td");
    numberOfAdministrEmploValu.textContent =
      numberOfFinanceEmplo +
      numberOfAdministrEmplo +
      numberOfMarkitingEmplo +
      numberOfDevEmplo;
    let avgSalaryAdmin = document.createElement("td");
    avgSalaryAdmin.textContent =
      financeAvg / numberOfFinanceEmplo +
      devAvg / numberOfDevEmplo +
      markitingAvg / numberOfMarkitingEmplo +
      adminAvg / numberOfAdministrEmplo;
    let debartmentTotalAdmin = document.createElement("td");
    debartmentTotalAdmin.textContent =
      financeAvg + devAvg + markitingAvg + adminAvg;
    tableRow1.appendChild(debartmentNameAdmin);
    tableRow1.appendChild(numberOfAdministrEmploValu);
    tableRow1.appendChild(avgSalaryAdmin);
    tableRow1.appendChild(debartmentTotalAdmin);
  }
}

tableRender();
getData();
