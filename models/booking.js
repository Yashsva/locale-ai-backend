const Sequelize = require("sequelize");
const { sqlize } = require("../util/db");

const Booking = sqlize.define('booking',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        vehicle_model_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        from_area_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        to_area_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        from_city_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        to_city_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        from_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        to_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        online_booking: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        mobile_site_booking: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        booking_created: {
            type: Sequelize.DATE,
            allowNull: false
        },
        from_lat: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        from_long: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        to_lat: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        to_long: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        car_cancellation: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

    },
    {
        underscored: true
    }
);

const Package_type = sqlize.define('package_type',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        hours: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        kilometers:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
    underscored: true
})

const Travel_type = sqlize.define('travel_type',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        travel_type_text: {
            type: Sequelize.STRING,
            allowNull: false,

        },
    },
    {
        underscored: true
    })
module.exports = { Booking, Package_type, Travel_type };