// Write your solution in this file!
const employee = {
    name: "Mwithiga",
    address: "Pinnacle Towers, h916",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    let newEmployees = {...employee};
    delete newEmployees[key];
    return newEmployees
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee
}