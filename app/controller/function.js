const getReview = require('../model/getReview');
const addReview = require('../model/addReview');
const addBooking = require('../model/addBooking');
const { where, and } = require('sequelize');
const { Op } = require('sequelize');


// Get Review
async  function getReviewFunction (req, res){
    try {
        const goodReview = await getReview.findAll({ 
            limit: 21, 
            order: [['updatedAt', 'DESC']],
            where:{penilaian :{[Op.gt]:3}}
        });
        const badReview = await getReview.findAll({ 
            limit: 3, 
            order: [['updatedAt', 'DESC']],
            where:{penilaian :{[Op.lte]:3}}
        });
        res.json({goodReview,badReview});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Post Review
async function addReviewFunction (req, res){
    try {
        const addReviewFunction = await addReview.create(req.body);
        res.json({ success: true, addReviewFunction });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

//Post Booking
async function addBookingFunction (req, res){
    try {
        console.log("fungsi berjalan ",req.body)
        const addBookingFunction = await addBooking.create(req.body);
        gmailsend(req.body);
        res.json({ success: true, addBookingFunction });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

function gmailsend(format) {
    console.log("ini format yang dikirim : ",format);
    const send = require('gmail-send')({
        user: 'serenitymedhospital@gmail.com',
        pass: 'itbtwarianihuqou',
        to : `${format.email}`,
        subject: 'SerenityMed Registration Confirmation Email',
      });
    
    
    send({
        text: `
        Terima kasih telah mendaftar
        berikut bukti pendaftaran Anda:
        
        Nama : ${format.nama_lengkap}
        Tanggal Lahir : ${format.tanggal_lahir}
        Jenis Kelamin : ${format.jenis_kelamin}
        Nomor HP : ${format.nomor_hp}
        Email : ${format.email}
        NIK : ${format.nik}
        Status Pasien : ${format.status_pasien}
        Poli : ${format.poli}
        Dokter : ${format.dokter}
        Jadwal Kunjungan : ${format.jadwal_dokter}
        `,
      }, (error, result, fullResult) => {
        if (error) console.error(error);
        console.log(result);
      })

}


module.exports = {
    getReviewFunction,
    addReviewFunction,
    addBookingFunction
}