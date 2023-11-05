const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utlis/generateMarkdown");



//function to initialize the application
function init() {
  //prompt the user for information
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter a title for your project");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "description",
        message: "What is the purpose of your project?",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please define the purpose of your project.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "installation",
        message: "Add your instruction for the installation of your project.",
        validate: (installationInput) => {
          if (installationInput) {
            return true;
          } else {
            console.log("Please add instructions to install your project.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "usage",
        message: "How do you use your project?",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please decribe what your project do.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "test",
        message: "Add your test instruction.",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("Please enter your test instructions.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "credits",
        message: "Did anyone else work with you on this project?",
        validate: (creditsInput) => {
          if (creditsInput) {
            return true;
          } else {
            console.log("Please list your collaborators.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "contribution",
        message:
          "What are your guidelines for other to follow in order to contribute?",
        validate: (contributionInput) => {
          if (contributionInput) {
            return true;
          } else {
            console.log("Please enter your guideline.");
            return false;
          }
        },
      },

      {
        type: "list",
        name: "license",
        message: "Select the type of license you would like to use?",
        choices: [
          "Unlicense",
          "MIT",
          "GNU General Public License v3.0",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "GNU Affero General Public License v3.0",
          "Eclipse Public License"
        ],
        validate: (licenseInput) => {
          if (licenseInput) {
            return true;
          } else {
            console.log("Please select an option.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "github",
        message: "What is your github username so others can connect with you?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log(
              "Please enter your github username so others can connect with you."
            );
            return false;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please provide your email.");
            return false;
          }
        },
      },
    ])
    //all questions answer, function to call the writeToFile
    .then((data) => {
      const markdownContent = generateMarkdown(data);
      writeToFile("README.md", markdownContent);
    });
}

  // Write the content
  function writeToFile(fileName, content) { 
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.log("Error creating README.md:", err);
      } else {
        console.log("README.md file has been created successfully.");
      }
    });
  }



// Call the init function to start the prompt.
init();


