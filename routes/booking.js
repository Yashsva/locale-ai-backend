const express=require('express');

const validate_input=require('../util/validate_input').validate_fields;
const route=express.Router();

const bookingController=require('../controllers/booking');

route.post('/add_booking',validate_input('create_booking_detail'),bookingController.post_add_booking);

route.get('/add_booking_detail',bookingController.get_add_booking);

module.exports=route;