// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateTeam = team => {

    // create the Manager html
    const generateManager = Manager => {
        return `
        <div>
            <div>
                <h2>${Manager.theName()}</h2>
                <h3>
                    <i class="fas fa-mug-hot mr-2"></i> ${Manager.getRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>
                        ID: ${Manager.theId()}
                    </li>
                    <li>
                        Email: <a href="mailto:${Manager.theEmail()}">${Manager.theEmail()}</a>
                    </li>
                    <li>
                        Office number: ${Manager.theOfficeNum()}
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for Engineers
    const generateEngineer = Engineer => {
        return `
        <div>
            <div>
                <h2>${Engineer.theName()}</h2>
                <h3>
                    <i class="fas fa-glasses mr-2"></i>${Engineer.getRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>ID: ${Engineer.theId()}</li>
                    <li>
                        Email: <a href="mailto:${Engineer.theEmail()}">${Engineer.theEmail()}</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/${Engineer.theGit()}" target="_blank" rel="noopener noreferrer">${Engineer.theGit()}</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for Interns
    const generateIntern = Intern => {
        return `
        <div>
    <div>
        <h2>${Intern.theName()}</h2>
        <h3>
            <i class="fas fa-user-graduate mr-2"></i>${Intern.getRole()}
        </h3>
    </div>
    <div>
        <ul>
            <li>ID: ${Intern.theId()}</li>
            <li>${Intern.theEmail()}</a></li>
            <li>School: ${Intern.theSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(Manager => generateManager(Manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(Engineer => generateEngineer(Engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(Intern => generateIntern(Intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${generateTeam(team)}
        </main>
    </body>
</html>
    `;
};
