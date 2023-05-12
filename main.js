import { generateTokens } from './utils.js'
import chalk from 'chalk';




generateTokens((validTokens, invalidTokens, table) => {

    console.log(chalk.yellow("============ Valid tokens added  ============="));
    console.log(chalk.blue(JSON.stringify(validTokens, null, 2)));


    console.log(chalk.yellow("============ Invalid tokens added  ============="));
    console.log(chalk.redBright(JSON.stringify(invalidTokens, null, 2)));
},"i don't exist");


