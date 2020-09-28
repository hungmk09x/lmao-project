const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// tao may chu
app.listen(PORT,function () {
    console.log("server is running...");
})

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("home");
})
app.get("/dang-ky",function (req,res) {
    res.render("dangky");
})
app.get("/dang-nhap",function (req,res) {
    res.render("dangnhap");
})
app.get("/EDM",function (req,res) {
    res.render("EDM");
})
app.get("/Rap",function (req,res) {
    res.render("Rap-HipHop");
})
app.get("/Pop",function (req,res) {
    res.render("Pop");
})
app.get("/Vietnam",function (req,res) {
    res.render("singer");
})
app.get("/us-uk",function (req,res) {
    res.render("us-uk");
})
app.get("/korea",function (req,res) {
    res.render("korea");
})
app.get("/top-selling",function (req,res) {
    res.render("Top-selling");
})
app.get("/thanh-toan",function (req,res) {
    res.render("buy");
})