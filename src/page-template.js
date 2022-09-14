
function generateHtml(team) {
    var template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="bootstrap.min(1).css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body class="text-light bg-dark vh-100">
        <h1 class="text-center mx5-3">My Team</h1>
        <div class="container-fluid d-flex h-100 align-items-center justify-content-center">
        ${team.map(employee => {
        return generateCard(employee)
    })
            .join('')
        }
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`
    return template;
}
function generateCard(employee) {
    var template = `
    <div class="card text-white bg-danger mx-5" style="max-width: 18rem;">
        <div class="card-header">${employee.name}</div>
        <div class="card-body">
          <h4 class="card-title">${employee.id}</h4>
          <p class="card-text">${employee.email}</p>
          ${lastProperty(employee)}
        </div>
    </div>`
    return template;
}
function lastProperty(employee) {
    var finalProp = '';
    if (employee.getRole() === 'Manager') {
        finalProp = employee.officeNum
    } else if (employee.getRole() === 'Intern') {
        finalProp = employee.School
    } else if (employee.getRole() === 'Engineer') {
        finalProp = employee.GitHub
    }
    var template = `<p class="card-text">${finalProp}</p> `
    return template
}

module.exports = generateHtml