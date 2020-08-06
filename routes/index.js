var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/videos", (request, response) => {
    response.sendFile(path.resolve("D:\\Rec SMART INTERVIEWS\\session 1\\com\\Zoom 2020-04-18 16-42-38.mp4"));
    // fs.createReadStream(path.resolve("D:\\Rec SMART INTERVIEWS\\session 25\\Zoom Meeting 2020-07-12 13-54-45-converted.mp4")).pipe(response);
    console.log("Sending the video");
});

module.exports = router;
