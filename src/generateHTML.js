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

const buildMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholder(template, "team", html);
};

const replacePlaceholder = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = builder;