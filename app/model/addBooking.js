const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const addBooking = sequelize.define('booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false
    },
    nama_lengkap: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_hp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nik: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status_pasien: {
        type: DataTypes.STRING,
        allowNull: false
    },
    poli: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dokter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jadwal_dokter: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    freezeTableName : true
});

module.exports = addBooking