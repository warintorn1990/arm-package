const chalk = require('chalk');

module.exports = {
    addOne: async (num) => {
        console.log(chalk.green(`${num += 1}`));
        return num += 1;
    }
}