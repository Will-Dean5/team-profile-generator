// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class = "card col-5 m-2" style = "width: 20rem;">
            <div class = "card-body">
                <h2>${manager.getName()}</h2>
                <h3>
                    <i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>
                        ID: ${manager.getId()}
                    </li>
                    <li>
                        Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </li>
                    <li>
                        Office number: ${manager.theOfficeNum()}
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div>
            <div>
                <h2>${engineer.theName()}</h2>
                <h3>
                    <i class="fas fa-glasses mr-2"></i>${engineer.getRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>ID: ${engineer.theId()}</li>
                    <li>
                        Email: <a href="mailto:${engineer.theEmail()}">${engineer.theEmail()}</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/${engineer.theGit()}" target="_blank" rel="noopener noreferrer">${engineer.theGit()}</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div>
    <div>
        <h2>${intern.theName()}</h2>
        <h3>
            <i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}
        </h3>
    </div>
    <div>
        <ul>
            <li>ID: ${intern.theId()}</li>
            <li>${intern.theEmail()}</a></li>
            <li>School: ${intern.theSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
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
