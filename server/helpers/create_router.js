const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

    const router = express.Router();
    
    // INDEX get all bookings from MongoDB, and serve as json

    router.get('/', (req, res) =>{
        collection.find().toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        })
    });

    // SHOW, get a booking from MongoDB by id, and serve as json

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection.findOne({_id: ObjectID(id)})
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        })
    });

    // CREATE, Post a new booking, and persist to the database

    router.post('/', (req, res) => {
        const newData = req.body;
        collection.insertOne(newData)
        .then((result) => {res.json(result.ops[0])})
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        })
    })

    // DESTROY, Delete a booking via its ID

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection.deleteOne({_id: ObjectID(id)})
        .then((result) => {res.json(result)})
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        })
    })

    // UPDATE, update a booking that already exists via its ID

    router.put('/:id', (req, res) => {
        const id = req.params.id
        const updateData = req.body
        collection.updateOne(
            {_id: ObjectID(id)},
            {$set: updateData}
        )
        .then((result) => {
            res.json(result)})
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        })
    })


    

    return router;
};

module.exports = createRouter;