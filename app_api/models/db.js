var mongoose=require("mongoose");

var dbURI="mongodb://localhost/mekanbul";
//var dbURI="mongodb+srv://Busra:12345678a@mekanbul.lpvaulc.mongodb.net/mekanbul?retryWrites=true&w=majority";
mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
    
}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
    console.log(dbURI + "adresindeki veritabanına bağlandı");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI + "adresindeki veritabanına bağlanamadı");
});
mongoose.connection.on("error",function(){
    console.log(dbURI + "bağlantı hatası");
});

require("./mekansema");