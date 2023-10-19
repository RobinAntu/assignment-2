const db = require("../models");
const Phones = db.phones;
const Contacts = db.contacts;
const Op = db.Sequelize.Op;

// Calculate stats
exports.calculate = (req, res) => {
    Phones.findAll({
        attributes: ['contactId', [sequelize.fn('COUNT', sequelize.col('id')), 'phoneCount']],
        group: ['contactId'],
    })
    .then(phoneCounts => {
        // The phoneCounts array will contain contactId and phoneCount for each contact
    })
    .catch(err => {
        // Handle any errors
    });
    
};