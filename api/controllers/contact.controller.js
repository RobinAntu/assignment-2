const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    exports.create = (req, res) => {
        const { contactName, email, phoneNumber } = req.body;
    
        // You should validate the input data here
    
        Contacts.create({
            contactName: contactName,
            email: email,
        })
        .then(contact => {
            // You can also associate the phone number here
            if (phoneNumber) {
                Phones.create({
                    phoneType: "Mobile",
                    phoneNumber: phoneNumber,
                    contactId: contact.id // Link the phone to the contact
                });
            }
    
            res.send(contact);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the contact."
            });
        });
    };
    
};

// Get all contacts
exports.findAll = (req, res) => {
    Contacts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one contact by id
exports.findOne = (req, res) => {
        const id = req.params.id;
    
        Contacts.findByPk(id, { include: Phones })
        .then(contact => {
            if (!contact) {
                res.status(404).send({ message: "Contact not found" });
            } else {
                res.send(contact);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the contact."
            });
        });
    
    
};

// Update one contact by id
exports.update = (req, res) => {
        const id = req.params.id;
        const { contactName, email } = req.body;
    
        // You should validate the input data here
    
        Contacts.findByPk(id)
        .then(contact => {
            if (!contact) {
                res.status(404).send({ message: "Contact not found" });
            } else {
                contact.contactName = contactName;
                contact.email = email;
    
                contact.save().then(() => {
                    res.send(contact);
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the contact."
            });
        });
    
  
};

// Delete one contact by id
exports.delete = (req, res) => {
        const id = req.params.id;
    
        Contacts.findByPk(id)
        .then(contact => {
            if (!contact) {
                res.status(404).send({ message: "Contact not found" });
            } else {
                // You can also delete associated phone numbers if needed
                contact.destroy().then(() => {
                    res.send({ message: "Contact was successfully deleted" });
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the contact."
            });
        });
    
    
};
