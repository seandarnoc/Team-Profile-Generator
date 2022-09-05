const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const { type } = require('os');

function askEmployeeQuestions() {
    const questionsList = [{
        type: "input",
        message: "Enter your name:",
        name: "name"
    }, {
        type: "input",
        message: "Enter your employee ID:",
        name: "id"
    }, {
        type: "input",
        message: "enter your work email:",
        name: "email"
    }, {
        type: "list",
        message: "Select  your job title:",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return inquirer
        .prompt(questionsList);
}

function askManagerQuestions() {
    const questionsList = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];

    return inquirer
        .prompt(questionsList);
}

function askEngineerQuestion() {
    const questionsList = [{
        type: "input",
        message: "What is your github?",
        name: "github"
    }];

    return inquirer
        .prompt(questionsList);
}

function askInternQuestion() {
    const questionsList = [{
        type: "input",
        message: "What school do you attend?",
        name: "school"
    }];

    return inquirer
        .prompt(questionsList);
}


async function run() {
    let employeeArray = [];
    const maxTimes = 10;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            askEmployeeQuestions()
                .then(function ({ name, id, email, title }) {

                    if (title === "Manager") {
                        askManagerQuestions().then(function ({ officeNumber }) {
                            this.employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        askEngineerQuestion().then(function ({ github }) {
                            this.employee = new Engineer(name, id, email, github, title);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        askInternQuestion().then(function ({ school }) {
                            this.employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        const result = await promise;
      
    }



    function displayTitle(employee) {
        if (employee.title === "Manager") {
            console.log(employee.officeNumber);
            return `office number: ${employee.officeNumber}`;
        }

        if (employee.title === "Intern") {
            return `school: ${employee.school}`;
        }

        if (employee.title === "Engineer") {
            return `gitHub: ${employee.github}`;
        }

    }
    function getCardHtml() {
        let html = "";
        for (j = 0; j < maxTimes; j++) {

            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${employeeArray[j].name}</h4>
                </div>
                <div class="col card-header">
                    <h4>${employeeArray[j].title}</h4 >
                </div >
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${employeeArray[j].id}</li>
                    <li class="list-group-item">Email: ${employeeArray[j].email}</li>
                    <li class="list-group-item"> ${displayTitle(employeeArray[j])}</li>
                </ul>
            </div > `;
        }
        return html;
    }



    let html = `< !DOCTYPE html >
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css">
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />

                                    <title>My Engineering Team</title>
                                       
                    </head>
      

                    <body>
                        <header class="bg-dark">
                            <h1 class="p-4 text-light text-center bg-dark">My Team</h1>
                        </header>
                                    
                        <div class="col-md-12">
                            <div class="row">

                                <div class="col-md-9">

                                    <div class="mt-2">
                                        <div class="card-body">
                                            <div class="d-flex flex-row">
                                       
                                                ${getCardHtml()}

                                            </div>
                                        </div>    
                                    </div>    
                                </div>
                            </div>      
                        </div>                       

                    </body>

    
    </html>
    `;




        
    fs.writeFile('newfile.html', html, function (err) {
        if (err) throw err;
      
    });
}
run();











