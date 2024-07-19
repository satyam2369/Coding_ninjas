var express = require('express');
var task = require('../models/task');
var router = express.Router();

router.get("/allTasks", async function(req,res,next){
    const arr = await task.find();
    res.json(arr);
})

router.post('/upload_task', async function(req, res, next){
    const createdTask = await task.create({
        title: req.body.title,
        des: req.body.des,
        priority: req.body.priority,
        uid: req.body.uid
    })

    res.json(createdTask);
})

module.exports = router;