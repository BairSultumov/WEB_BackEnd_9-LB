const http = require("http");
const fs = require("fs");


http.createServer(function(request, response){
    fs.readFile("1/index.html", function(error, data){   
        response.end(data); 
    });

}).listen(3000, function(){
    console.log("Server started at 3000");
});
