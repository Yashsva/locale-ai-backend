const Booking = require('../models/booking').Booking;
const { validationResult } = require('express-validator');


exports.post_add_booking = (req, res, next) => {

    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });

        }
    } catch (error) {
        console.log(err);
    }

    if (req.body.travel_type_id != 2 && (req.body.from_area_id != null || req.body.to_area_id != null)) {
        return res.json({ error: "area_id applicable only for point to point travel" });
    }
    else if (req.body.travel_type_id == 2 && (req.body.from_area_id == null || req.body.to_area_id == null)) {
        return res.json({ error: "area_id required" });

    } else if (req.body.online_booking == req.body.mobile_site_booking) {
        return res.json({ error: "Invalid booking source" });
    }
    
    

    Booking.create({
        id: req.body.id,
        user_id: req.body.user_id,
        vehicle_model_id: req.body.vehicle_model_id,
        from_city_id: req.body.from_city_id,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
        online_booking: req.body.online_booking,
        mobile_site_booking: req.body.mobile_site_booking,
        booking_created: req.body.booking_created,
        from_lat: req.body.from_lat,
        from_long: req.body.from_long,
        to_lat: req.body.to_lat,
        to_long: req.body.to_long,
        car_cancellation: req.body.car_cancellation,
        package_type_id: req.body.package_type_id,
        travel_type_id: req.body.travel_type_id,
        from_area_id: req.body.from_area_id,
        to_area_id: req.body.to_area_id,
        to_city_id: req.body.to_city_id

    }).then(result => {
        // console.log(result);
        return res.json({ message: 'Booking detail created' });

    }).catch(err => {
        // console.log(err);
        return res.json({ error: err.message });
    })




}

exports.get_add_booking=(req,res,next)=>{
    res.render('add_booking_detail');
}