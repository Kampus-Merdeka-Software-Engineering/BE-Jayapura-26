const getReview = require('../model/getReview');
const addReview = require('../model/addReview');
const addBooking = require('../model/addBooking');


// Get Review
async  function getReviewFunction (req, res){
    try {
        const getReviewFunction = await getReview.findAll();
        res.json(getReviewFunction);
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
        const addBookingFunction = await addBooking.create(req.body);
        // fungsi gmail send
        var objek = JSON.parse(req.body);
        console.log (objek);
        // const send = require('gmail-send')({
        //     user: 'medserenity071@gmail.com',
        //     pass: 'elzvzjqfsrgwqayp',
        //     to :   ,
        //     subject: 'Form Booking Dokter',
        //   });
        
        
        // send({
        //     text: addBookingFunction,  
        //   }, (error, res, fullRes) => {
        //     if (error) console.error(error);
        //   res.json({ success: true, addBookingFunction });
        //   })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}


module.exports = {
    getReviewFunction,
    addReviewFunction,
    addBookingFunction
}