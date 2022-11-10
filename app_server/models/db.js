var mongoose=require("mongoose");

var dbURI="mongodb://Busra:12345678a@ac-lfaaw1u-shard-00-00.lpvaulc.mongodb.net:27017,ac-lfaaw1u-shard-00-01.lpvaulc.mongodb.net:27017,ac-lfaaw1u-shard-00-02.lpvaulc.mongodb.net:27017/?ssl=true&replicaSet=atlas-qyehzd-shard-0&authSource=admin&retryWrites=true&w=majority";
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