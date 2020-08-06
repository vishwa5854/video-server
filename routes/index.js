var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/videos/:video", (request, response) => {
    response.sendFile(path.resolve("C:\\Users\\Administrator\\Downloads\\data\\" + request.params.video + ".mp4"));
    console.log("Sending the video");
});

module.exports = router;
