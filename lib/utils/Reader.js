const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}
//lee JSON
//prueba de rama
module.exports = Reader