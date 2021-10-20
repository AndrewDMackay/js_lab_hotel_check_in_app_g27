const express = require('express');
const app = express();

const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const createrRouter = require('./helpers/create_router.js');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('hotel_bookings');
        const bookingsCollection = db.collection('bookings');
        const bookingsRouter = createrRouter(bookingsCollection);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.error);

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});

