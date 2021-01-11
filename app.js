const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');


const sqlize = require('./util/db').sqlize;
const db_init = require('./util/init_db');

const { Booking, Package_type, Travel_type } = require('./models/booking');

const booking_routes = require('./routes/booking');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

//set secure response headers
app.use(helmet());
//compress assets while sending response
app.use(compression());
app.use(morgan('combined',{ stream:accessLogStream}));     //logging requests
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/book', booking_routes);
app.use('/', (req, res, next) => {
    return res.redirect('/book/add_booking_detail');
})

sqlize.authenticate().then(() => {

    console.log('DB Connection established');

    Travel_type.hasMany(Booking, {
        foreignKey: {
            name: 'travel_type_id',
            allowNull: false
        },
        constraints: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    });
    Booking.belongsTo(Travel_type);
    Package_type.hasMany(Booking, {
        foreignKey: {
            name: 'package_type_id',
            allowNull: false,
        },
        constraints: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    });
    Booking.belongsTo(Package_type);

    // return sqlize.sync({ force: true });         //for rebuilting database
    return sqlize.sync();

}).then(res => {
    // console.log(res);
    db_init();
    console.log("DB Ready");
}).catch(err => {

    console.error('Unable to connect to the database:', err);
});




app.listen(process.env.PORT || 3500, () => {
    console.log("listening");
})