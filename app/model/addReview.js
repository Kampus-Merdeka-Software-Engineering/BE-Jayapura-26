const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const addReview = sequelize.define('review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    penilaian: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pengalaman: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName : true
});

module.exports = addReview