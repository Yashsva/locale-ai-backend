const { Package_type, Travel_type } = require('../models/booking');

function initialize_package_types() {
    Package_type.bulkCreate(
        [
            { id: 1, hours: 4, kilometers: 40 },
            { id: 2, hours: 8, kilometers: 80 },
            { id: 3, hours: 6, kilometers: 60 },
            { id: 4, hours: 10, kilometers: 100 },
            { id: 5, hours: 5, kilometers: 50 },
            { id: 6, hours: 3, kilometers: 30 },
            { id: 7, hours: 12, kilometers: 120 },
        ]).then(res => {
            console.log("Package_type table initialized");
        }).catch(err => {
            console.log(err);
        });
}

function initialize_travel_types() {
    Travel_type.bulkCreate(
        [
            { id: 1, travel_type_text: "long distance" },
            { id: 2, travel_type_text: "point to point" },
            { id: 3, travel_type_text: "hourly rental" },
        ]).then(res => {
            console.log("Travel_type table initialized");
        }).catch(err => {
            console.log(err);
        });
}

function init_db(){
    Package_type.count().then(records=>{
        if(records==0){
            initialize_package_types();
        }
        return Travel_type.count();
    }).then(records=>{
        if(records==0){
            initialize_travel_types();
        }
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports=init_db;