const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your demo name',
                default: 'this.appname'
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing () {
        const templates = [
            'html/index.html',
            'js/index.js',
            'css/index.css',
            'images/logo.jpg'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}