function createManagerCard(manager) {
        return `
        <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                    ${manager.getName()}
                    </h5>
                    <h5 class="card-title"><
                    i class="fa-solid fa-business-time"></i> 
                    ${manager.getRole()}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href='mailto:${manager.getEmail}' target="_blank">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNum()}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        `
};

function createEngineerCard(engineer) {
    return `
    <div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <h5>${engineer.getName()}</h5>
                <h5><i class="fa-solid fa-laptop-code"></i>
                </i> ${engineer.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href='mailto:${engineer.getEmail()}' target="_blank">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `
};


function createInternCard(intern) {
    return `
    <div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <h5>${intern.getName()}</h5>
                <h5><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href='mailto:${intern.getEmail()}' target="_blank">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `

};

function generateHTML(cards) {
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
    
                    ${cards}
    
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

module.exports = { createManagerCard, createEngineerCard, createInternCard, generateHTML };