module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // DEFINE YOUR MODEL HERE
        module,exports : (sequelize, Sequelize) => {
            const Phone = sequelize.define("phone", {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: contactID,
                },
                phoneType: {
                    type: Sequelize.STRING,
                },
                phoneNumber: {
                    type: Sequelize.STRING,
                },
                // Other columns for phone information can be added here
            });
        
            return Phone;
        },
        
    });
  
    return Phone;
};