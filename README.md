# Thinking-API
Creación de API

# Requerimientos:

>1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
>2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
>3. Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

# Pre requisitos
>1. npm init
>2. npm install --save-dev jest
>3. npm install express --save
>4. versionar en git y crear el archivo .gitignore
>5. Modularizacion y creacion de archivo JSON

Aquí encuentras la db en formato JSON de los estudiantes de Visual Partner-Ship: https://gist.github.com/carlogilmar/1f5164637fb77aecef3b9e6b9e2a9b63

# Para obtener la lista del archivo json.
```javascript
const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader
```
# Recibe un parámetro
```javascript
const Reader = require ("../utils/Reader")
const PartnerService = require ("../services/PartnerService")

class PartnerController{

    static getstudent(){
        const explorers = Reader.readJsonFile("visualpartners.json")
        return PartnerService.filterstudent(explorers);
    }

    static getPartner(){
        const explorers = Reader.readJsonFile("visualpartners.json")
        return PartnerService.filterPartner(explorers);
    }

    static getemails(){
        const explorers = Reader.readJsonFile("visualpartners.json")
        return PartnerService.filteremails(explorers);
    }
}

module.exports = PartnerController

```

# Filtrar por misión, usa el parámetro y regresa el resultado obtenido
```javascript
class PartnerService{

    static filterstudent(explorers){
        const explorersInNode = explorers.filter((explorer) => explorer);
        return explorersInNode
    }

    static filterPartner(explorers){
        const explorersInNode = explorers.filter((explorer) => explorer.credits >= 500);
        return explorersInNode
    }

    static filteremails(explorers){
        const explorersInNode = explorers.filter((explorer) => explorer.haveCertification == true);
        const usernamesInNode = explorersInNode.map((explorer) => explorer.email);
        return usernamesInNode
    }
}

module.exports = PartnerService
```

# Mandar losparametros con el servidor pur URL
```javascript
const PartnerController = require("./controllers/PartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    const student = PartnerController.getstudent();
    response.json(student);
});

app.get("/v1/students/emails", (request, response) => {
    const PartnerInMission = PartnerController.getemails();
    response.json(PartnerInMission);
});

app.get("/v1/students/credits", (request, response) => {
    const PartnerInMission = PartnerController.getPartner();
    response.json(PartnerInMission);
});

app.listen(port, () => {
    console.log(`localhost:${port}`);
});
```
