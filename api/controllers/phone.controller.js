const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
        const { phoneType, phoneNumber, contactId } = req.body;
    
        // You should validate the input data here
    
        Phones.create({
            phoneType: phoneType,
            phoneNumber: phoneNumber,
            contactId: contactId, // Link the phone to a contact
        })
        .then(phone => {
            res.send(phone);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the phone record."
            });
        });
    
    
};

// Get all phones
exports.findAll = (req, res) => {

    
};

// Get one phone by id
exports.findOne = (req, res) => {
        const id = req.params.id;
    
        Phones.findByPk(id)
        .then(phone => {
            if (!phone) {
                res.status(404).send({ message: "Phone record not found" });
            } else {
                res.send(phone);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the phone record."
            });
        });
    
  
};

// Update one phone by id
exports.update = (req, res) => {
        const id = req.params.id;
        const { phoneType, phoneNumber } = req.body;
    
        // You should validate the input data here
    
        Phones.findByPk(id)
        .then(phone => {
            if (!phone) {
                res.status(404).send({ message: "Phone record not found" });
            } else {
                phone.phoneType = phoneType;
                phone.phoneNumber = phoneNumber;
    
                phone.save().then(() => {
                    res.send(phone);
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the phone record."
            });
        });
    
    
};

// Delete one phone by id
exports.delete = (req, res) => {
    const id = req.params.id;
    
        Phones.findByPk(id)
        .then(phone => {
            if (!phone) {
                res.status(404).send({ message: "Phone record not found" });
            } else {
                phone.destroy().then(() => {
                    res.send({ message: "Phone record was successfully deleted" });
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the phone record."
            });
        });
    
 
};