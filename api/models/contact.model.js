module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        module,exports:(sequelize, Sequelize) => {
            const Contact = sequelize.define("contact", {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: contactID,
                },
                contactName: {
                    type: Sequelize.STRING,
                },
                // Other columns for contact information can be added here
            });
        
            return Contact;
        },
        
        
    });
  
    return Contact;
};