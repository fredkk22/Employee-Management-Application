module.exports = {allManage};
require('dotenv').config();
const { addDepartment, addRole, addEmployee } = require('./queries/add');
const { deleteDepartment, deleteRole, deleteEmployee, deleteManager } = require('./queries/delete');
const { viewDepartments, viewRoles, viewEmployees, viewEmpByDept, viewEmpByManager } = require('./queries/view');
const inquirer = require('inquirer');
const manageChoices = [
    "Add Department",
    "Add Role",
    "Add Employee",
    "View Departments",
    "View Roles",
    "View Employees",
    "View Employees by Department",
    "View Employees by Manager",
    "Update Managers", 
    "Remove Department",
    "Remove Role",
    "Remove Employee",
];
const updateManagerChoices = [
    "Add new manager",
    "Delete a manager"
];

console.log(`
________________________________

        EMPLOYEE MANAGER

         By Freddy Kwak
________________________________
`);

function allManage() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What would you like to do?",
                choices: manageChoices,
                name: "manageChoices",
                loop: false
            }
        ])
        .then((data) => {
            if (data.manageChoices === manageChoices[0]) {
                addDepartment();
            } else if (data.manageChoices === manageChoices[1]) {
                addRole();
            } else if (data.manageChoices === manageChoices[2]) {
                addEmployee();
            } else if (data.manageChoices === manageChoices[3]) {
                viewDepartments();
            } else if (data.manageChoices === manageChoices[4]) {
                viewRoles();
            } else if (data.manageChoices === manageChoices[5]) {
                viewEmployees();
            } else if (data.manageChoices === manageChoices[6]) {
                viewEmpByDept();
            } else if (data.manageChoices === manageChoices[7]) {
                viewEmpByManager();
            } else if (data.manageChoices === manageChoices[8]) {
                updateManagers();
            } else if (data.manageChoices === manageChoices[9]) {
                deleteDepartment();
            } else if (data.manageChoices === manageChoices[10]) {
                deleteRole();
            } else if (data.manageChoices === manageChoices[11]) {
                deleteEmployee();
            }
        })
}

function updateManagers() {
    inquirer
    .prompt({
        type: 'list',
        message: 'What would you like to do with your managers?',
        choices: updateManagerChoices,
        name: 'updateManagers',
        loop: false
    })
    .then((data) => {
        if (data.updateManagers === updateManagerChoices[0]) {
            addManager();
        } else if (data.updateManagers === updateManagerChoices[1]) {
            deleteManager();
        }
    })
}

allManage();