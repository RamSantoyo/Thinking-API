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
