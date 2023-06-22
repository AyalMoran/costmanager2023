//  Yael Zvadviker - id:208418384
//  Ofek Avigdor  - id:307837807
//  Ayal Moran - id:311148522 
//
const express = require('express');
const url = require('url');
const { Cost, User } = require('../models/data-base');
const router = express.Router();

// Handle incoming POST requests to add new costs
router.post('/', function (req, res) {

    // Find the user with the provided ID
    User.findOne({ id: req.body.user_id }, function (error, user) {

        // If there's an error, respond with a server error message
        if (error) {
            res.status(500).json({ 'message': 'Server Error: Unable to find user', 'error': error});
        }
        // If the user doesn't exist, respond with a client error message
        else if (!user) {
            res.status(400).json({ message: 'Client Error: The userID in collection does not match to userID in body' });
        }
        // If the user exists and the day and month are valid, create the cost
        else {
            if ((req.body.day >= 1 && req.body.day <= 31) && (req.body.month >= 1 && req.body.month <= 12)) {
                // Create and save new cost in MongoDB
                Cost.create(req.body)
                    .then((cost) => {
                        console.log(`Created new cost: ${cost}`);
                        res.status(200).json(cost);
                    })
                    .catch((error) => {
                        console.error('Error creating cost: ' + error);
                        res.status(500).json({ message: 'Server Error: Unable to create cost' });
                    });
            }
            // If the day or month is invalid, respond with a client error message
            else {
                res.status(400).json({ message: 'Client Error: Invalid day or month' });
            }
        }
    });
});

module.exports = router;
