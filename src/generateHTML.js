const path = require('path');
const fs = require('fs');
const templatesDir = path.resolve(__dirname, "../htmltemplates")



const builder = employees => {
const webpage = [];

    webpage.push(employees
        .filter(employee => employee.getRole()==='Manager')
        .map(manager => renderManager(manager))
    );
    webpage.push(employees
        .filter(employee => employee.getRole()==='Engineer')
        .map(engineer => renderEngineer(engineer))
    );
    webpage.push(employees
        .filter(employee => employee.getRole()=== 'Intern')
        .map(intern => renderIntern(intern))
    );
        ///builds the site
    return buildMain(webpage.join(""))

}

//Render manager
const renderManager = manager => {
let template = fs.readFileSync(path.resolve(templatesDir, 'manager.html'),"utf8");
template = replacePlaceholder(template,"name",manager.getName());
template = replacePlaceholder(template,"role",manager.getRole());
template = replacePlaceholder(template, "email",manager.getEmail());
template = replacePlaceholder(template,"id",manager.getId());
template = replacePlaceholder(template, "officeNumber",manager.getOffice());
return template;
}
//Render Intern
const renderIntern = intern => {
let template = fs.readFileSync(path.resolve(templatesDir, 'Intern.html'),"utf8");
template = replacePlaceholder(template,"name",intern.getName());
template = replacePlaceholder(template,"role",intern.getRole());
template = replacePlaceholder(template, "email",intern.getEmail());
template = replacePlaceholder(template,"id",intern.getId());
template = replacePlaceholder(template, "school",intern.getSchool());
return template;
}



///Render Engineer
const renderEngineer = engineer => {
let template = fs.readFileSync(path.resolve(templatesDir, 'Engineer.html'),"utf8");
template = replacePlaceholder(template,"name",engineer.getName());
template = replacePlaceholder(template,"role",engineer.getRole());
template = replacePlaceholder(template, "email",engineer.getEmail());
template = replacePlaceholder(template,"id",engineer.getId());
template = replacePlaceholder(template, "github",engineer.getGithub());
return template;
}




const buildMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholder(template, "team", html);
};

const replacePlaceholder = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = builder;