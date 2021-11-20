function generateTeam(employeesArray) {
    // start of index.html
    const startHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Oswald:wght@500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./styles.css" rel="stylesheet">
    <title>${employeesArray[0]}</title>
</head>
<body>`
    const endHTML = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`
    const header = `<header>
    ${employeesArray[0]}'s<br/>Team Roster
    </header>
    `
    const space = `<div class="container space">Meet the Rest of the Team!</div>`

    // HTML Containers
    const managerContainer = `<div class="container" id="managerContainer">
            <div class="positonTitle">Team Manager</div>
            <div class="card cardContainer" style="width: 35rem;">
                <div class="card-body cardBody">
                    <h2 class="card-title" style="font-weight: bold;">${employeesArray[1].name}</h2>
                    <h4 class="card-subtitle mb-2" style="font-weight: bold;">${employeesArray[1].role}</h4>
                    <h6 class="card-subtitle mb-2" style="font-weight: bold; font-decoration: italic">Employee ID ${employeesArray[1].id}</h6>
                    <p class="card-text"><i class="fas fa-phone"></i>&nbsp&nbsp&nbsp${employeesArray[1].officeNumber} <br/>
                    <i class="fas fa-envelope-open-text"></i>&nbsp&nbsp&nbsp${employeesArray[1].email} </p>
                </div>
            </div>
            </div>`

    let pageHTML = ''

    pageHTML += startHTML + header + managerContainer + space 
    pageHTML += `<div class="container" id="employeeContainer">`
    pageHTML += `<div class="positonTitle">Engineers</div>`

    for (let i = 0; i < employeesArray.length; i++) {
        if(employeesArray[i].role == "Engineer") {
            pageHTML += `
            <div class="card cardContainer" style="width: 25rem;">
                <div class="card-body cardBody">
                    <h2 class="card-title" style="font-weight: bold;">${employeesArray[i].name}</h2>
                    <h4 class="card-subtitle mb-2" style="font-weight: bold;">${employeesArray[i].role}</h4>
                    <h6 class="card-subtitle mb-2" style="font-weight: bold; font-decoration: italic">Employee ID ${employeesArray[1].id}</h6>
                    <p class="card-text"><i class="fas fa-envelope-open-text"></i>&nbsp&nbsp&nbsp${employeesArray[i].email} <br/><i class="fab fa-github"></i>&nbsp&nbsp&nbsp${employeesArray[i].github}</p>
                </div>
            </div>
            `
        }   
    }
    pageHTML += `<div class="positonTitle">Interns</div>`

        for (let i = 0; i < employeesArray.length; i++) {
            if(employeesArray[i].role == "Intern") {
                pageHTML += `
                <div class="card cardContainer" style="width: 25rem;">
                    <div class="card-body cardBody">
                        <h2 class="card-title" style="font-weight: bold;">${employeesArray[i].name}</h2>
                        <h4 class="card-subtitle mb-2" style="font-weight: bold;">${employeesArray[i].role}</h4>
                        <h6 class="card-subtitle mb-2" style="font-weight: bold; font-decoration: italic">Employee ID ${employeesArray[1].id}</h6>
                        <p class="card-text"><i class="fas fa-envelope-open-text"></i>&nbsp&nbsp&nbsp${employeesArray[i].email} <br/><i class="fas fa-graduation-cap"></i>&nbsp&nbsp&nbsp${employeesArray[i].school}</p>
                    </div>
                </div>
                `
            }   
    }
    pageHTML += `</div>`
    pageHTML += endHTML


    return pageHTML
}


module.exports = generateTeam