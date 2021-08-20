const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('meu', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false

});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối đã được thiết lập thành công.');
    } catch (error) {
        console.error('Không thể kết nối với cơ sở dữ liệu:', error);
    }
}

module.exports = connectDB;