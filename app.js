const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));


app.route("/")
.get(function(req,res){
    res.render("home");
});
app.route("/feature")
.get(function(req,res){
    res.render("features");
});
app.route("/contact")
.get(function(req,res){
    res.render("contact");
});

app.listen(3000 || process.env.PORT,function(){
    console.log("server is started on port 3000");
});