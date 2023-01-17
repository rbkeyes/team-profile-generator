// array to hold cards once generated
const teamCards = [];

function getIcon(employee) {
    let icon = '';
    switch (employee) {
        case manager:
            icon = '<i class="fa-solid fa-business-time"></i>';
            break;
        case engineer:
            icon = '<i class="fa-solid fa-laptop-code"></i>';
            break;
        case intern:
            icon = '<i class="fa-solid fa-graduation-cap"></i>';
            break;
        default:
            icon = '';
    }
    return icon;
};

function roleSpecificInfo(category) {
    let content = '';
    switch (category) {
        case officeNum:
            content = `Office number: ${manager.this.officeNumber}`
            break;
        case engineer:
            content = `Office number: ${engineer.this.officeNumber}`
            break;
        case intern:
            content = `Office number: ${intern.this.officeNumber}`
            break;
        default:
            icon = '';
    }
};

function generateCard(employee) {
    return `
    <div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${employee.this.name}</h5>
                <h5 class="card-title">${getIcon(employee)}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.this.id}</li>
                    <li class="list-group-item">email: <a href='mailto:${email}' target='blank'>${employee.this.email}</a></li>
                    <li class="list-group-item">${roleSpecificInfo(employee)}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `
}

function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <!-- css reset -->
        <link rel="stylesheet" href="./assets/style/reset.css">
        </link>
        <!-- fontAwesome -->
        <script src="https://kit.fontawesome.com/56c9504186.js" crossorigin="anonymous"></script>
        <!-- bootstrap css -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <!-- personalized stylesheet -->
        <link rel="stylesheet" href="./assets/style/style.css">
        </link>
    </head>
    
    <body class="body">
        <header class="header">
            <h1>My Team</h1>
        </header>
    
        <main>
            <div class="container">
    
                <div class="d-flex justify-content-center flex-wrap">
    
                    ${generateCard(manager)}
    
                </div>
    
            </div>
    
            </div>
    
        </main>
    
        <!-- bootstrap script -->
        <script src="index.js"></script>
    </body>
    
    </html>
    `
};

module.exports = generateHTML;