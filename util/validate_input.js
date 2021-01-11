const { body } = require('express-validator');

exports.validate_fields=(req_title)=>{
    switch (req_title) {
        case 'create_booking_detail':
            return [
                body('id').isInt().exists(),
                body('user_id').isInt().exists(),
                body('vehicle_model_id').isInt().exists(),
                body('package_type_id').isInt().exists(),
                body('travel_type_id').isInt().exists(),
                body('from_area_id').isInt().optional(),
                body('to_area_id').isInt().optional(),
                body('from_city_id').isInt().exists(),
                body('to_city_id').isInt().optional(),
                body('online_booking').isBoolean().exists(),
                body('mobile_site_booking').isBoolean().exists(),
                body('from_lat').isFloat().exists(),
                body('from_long').isFloat().exists(),
                body('to_lat').isFloat().exists(),
                body('to_long').isFloat().exists(),
                body('car_cancellation').isBoolean().exists(),
                

            ]
            
            
    
        default:
            return;
    }
}