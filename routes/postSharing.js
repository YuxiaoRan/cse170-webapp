var boards = require("../json/boards.json");

exports.postNew = function(req, res){
    //TODO
    var newBoard = {
        "user": "Sean Ran",
        "restaurant-name": "Pizza Hut",
        "comment": "I like this restaurant!",
        "src": "../images/pizza.jpg"
    };
    boards["boards"].push(newBoard);
    res.send('sharingBoard', boards);
};