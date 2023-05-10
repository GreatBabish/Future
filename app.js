const express = require("express");
const bodyParser = require("body-parser");
const https = require("https")
const request = require("request");

const app = express();

app.use(express.static("public3"));

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/lightning.html")
});


app.listen(process.env.PORT || 3000, function() {
    console.log("3000")
})


