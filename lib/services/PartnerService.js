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