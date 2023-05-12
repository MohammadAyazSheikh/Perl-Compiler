import fs, { appendFileSync } from 'fs';
import { scopeEnum, idTypeEnum, lexTypeEnum } from './enums.js';
import { SymbolTable } from './symbolTable.js';
import chalk from 'chalk';

//function for checking function name
const isNameFunValid = (name) => {


    const pattern = /^[a-zA-Z_]\w*$/;
    return pattern.test(name);
}

function isValidVarName(str) {
    // Check that the string starts with a $ sign
    if (str.charAt(0) !== "$") {
        return false;
    }

    // Check that the remaining characters are alphanumeric or underscore
    for (let i = 1; i < str.length; i++) {
        const c = str.charAt(i);
        if (!/^[a-zA-Z0-9_]+$/.test(c)) {
            return false;
        }
    }

    return true;
}



function generateLexeme(code) {
    //  regular expression to match words and operators 
    const regex = /[\w.]+|\$[\w]+|[^\s\w]+/g

    //  const regex =  /[\w.]+|[^\s\w]+/g;

    // getting tokens
    const tokens = code.match(regex);

    // Return the tokens 
    return tokens;
}


//function for reading file and making tokens

export const generateTokens = (callBack, name = "./testCode.pl",) => {



    const validTokens = [];
    const invalidTokens = [];

    let tokens = null;

    const table = new SymbolTable();


    //reading file
    fs.readFile(name, 'utf8', (err, data) => {


        //if error while reading file

        //if error
        if (err) {
            console.log(chalk.redBright("File Not Found"));
            return;
        }


        // tokens = data.split(" ");
        tokens = generateLexeme(data);


        tokens.forEach(token => {

            //saving new  identifier in symbol table
            if (isValidVarName(token) || isNameFunValid(token)) {

                if (!table.getEntry(token)) {

                    const idType = isValidVarName(token) ? idTypeEnum.variable : idTypeEnum.function;
                    const description = isValidVarName(token) ? "variable" : "function";
                    table.addEntry(token, lexTypeEnum.id, description, scopeEnum.local, idType);
                }


            }


            //saving valid tokens
            if (table.getEntry(token)) {

                validTokens.push(table.getEntry(token));
            }
            //saving invalid tokens
            else {

                //token is like ];
                if (
                    token.length == 2
                    &&
                    (token[0] == ']' || token[0] == ')')
                    && token[1] == ';') {
                    validTokens.push(table.getEntry(token[0]));
                    validTokens.push(table.getEntry(token[1]));
                }
                //checking if it is number
                else if (/^[0-9]+$/g.test(token)) {
                    const lex = {
                        name: token,
                        type: "number",
                        description: "this a valid number"
                    }
                    validTokens.push(
                        lex
                    )
                }
                else
                    invalidTokens.push(token)
            }

        });


        //saving to cvs

        const csv = "NAME,TYPE,DESCRIPTION\n";

        appendFileSync('./tokens.csv', csv);
        validTokens.map(token_ => {

            const csv = `${token_.name},${token_.type},${token_.description}\n`;

            appendFileSync('./tokens.csv', csv);
        })



        callBack && callBack(validTokens, invalidTokens, table);



    });

}



