const router = require('express').Router();
const db = require('../utils')

router.get('/', async(req, res) => {
    data = await db({}) 
    res.json(data)
});

router.post('/', async(req, res) => {
    if(req.body.title && req.body.text) {
        const data = await db({newobject: req.body});
        res.json(data);
    }
    else{
        res.status(500).send('Incorrect Submission');
    }
});

router.delete('/:noteid', async (req, res) => {
    const noteid = req.params.noteid;
    if(noteid) {
        let deleted;
        const data = (await db({}))
            .filter(noteObject => {
                if(noteid === noteObject.id) {
                    deleted = noteObject
                    return false
                }
                return true
            });
            await db({data})
            res.json(data);
    }
    else{
        res.status(500).send('Incorrect Submission');
    }
});


module.exports = router