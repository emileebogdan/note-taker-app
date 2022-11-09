const router = require('express').Router();
const db = require('../utils')

router.get('/', async(req, res) => {
    data = await db({}) 
    res.json(data)
});

// post route
// pass object with keys being what are sent in the function data or new object 
// delete route
module.exports=router