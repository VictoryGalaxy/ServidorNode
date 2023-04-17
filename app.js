var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){

    res.header("Access-Control-Allow-Oringin","*");
    res.send("Olá Mundo!");

});

app.listen(port, () => {
    console.log(`Servidor rodando com a porta ${port}`)
});
