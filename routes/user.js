var info = require("../json/userinfo.json");

exports.view = function(req, res){
    res.render('user', info);
};