const express=require('express');
const app= express();
 
app.set("view engine","ejs");

app.use(express.static('./public'));

app.get('/',function (req,res){
    res.render("login");
})

app.get('/warden',function (req,res){
    res.render("warden");
})
app.get('/accountant',function (req,res){
    res.render("accountant");
})

app.get('/logout', function(req, res) {
    res.render('logout');
});
app.get('/trial',function (req,res){
    res.render("trial");
})

app.listen(3001);
