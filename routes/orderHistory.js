var orders = require("../json/orders.json");

exports.view = function(req, res) {
    res.render('orderHistory', orders);
};