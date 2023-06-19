
console.log('start about file');
const express = require('express');
const router = express.Router();

/* GET products listing. */
/* GET specific product listing */
router.get('/', function(request,response) {

    const developers = [
        {
            firstname: 'Yael' ,
            lastname:'Zavedivker' ,
            id:'208418384' ,
            email:'yael260z@gmail.com'
        },
        {
            firstname:'Ofek' ,
            lastname:'Avigdor',
            id:'307837807' ,
            email: 'ofekag@gmail.com'
        },
        {
            firstname:'Ayal' ,
            lastname:'Moran',
            id:'311148522' ,
            email: 'moranayal@gmail.com'
        }
    ];

    response.status(200);
    response.send(developers);
    return response;
});

module.exports = router;


