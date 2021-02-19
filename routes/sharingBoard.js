var boards = require("../json/boards.json");

exports.view = function(req, res){
    //TODO
    res.render('sharingBoard', boards);
};