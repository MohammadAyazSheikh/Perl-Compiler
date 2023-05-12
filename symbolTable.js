import { keywords } from './reserveKeywords.js'

export class SymbolTable {

    constructor() {
        this.table = keywords;
    }

    addEntry(name, type, description = "", scope, idType,) {
        this.table[name] = {
            name,
            type,
            idType,
            scope,
            description,
        }
    }

    getEntry(name) {
        return this.table[name];
    }

    dltEntry(name) {
        delete this.keywords[name];
    }
}





