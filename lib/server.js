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