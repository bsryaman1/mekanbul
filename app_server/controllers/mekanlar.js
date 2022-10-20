var express = require("express");
var router = express.Router();

// slash gördüğün zaman function çalışır
const anaSayfa = function (req, res, next) {
  res.render("anasayfa", { 
  "baslik":"Anasayfa",
  "sayfaBaslik":{
   "siteAd":"MekanBul",
   "slogan":"Civardaki Mekanları Keşfet!"},
  "mekanlar": [
    {
      "ad":"Starbucks",
      "adres":"Centrum Garden AVM",
      "puan":"4",
      "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
      "mesafe":"10km"

    }
    ,
    {
      "ad":"Gloria Jeans",
      "adres":"Sdü Doğu Kampüsü",
      "puan":"3",
      "imkanlar":["Kahve","Çay","Tatlı"],
      "mesafe":"5km"
    }
  ]
});
};




const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi",
  {
    "baslik":"Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
      "ad":"Starbucks",
      "adres":"Centrum Garden AVM",
      "puan":"4",
      "saatler":[
      {
        "gunler":"Pazartesi-Cuma",
        "acilis":"09.00",
        "kapanis":"23.00",
        "kapali": false
      },
      {
        "gunler":"Cumartesi-Pazar",
        "acilis":"10.00",
        "kapanis":"23.00",
        "kapali": false
      }
      ],
      "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
      "koordinatlar":{
        "enlem":"37.7",
        "boylam":"30.5"
      },
      "yorumlar":[{
        "yorumYapan":"Levent Habip",
        "puan":"4",
        "tarih":"20 Ekim 2022",
        "yorumMetni":"Tavla varsa güzeldir."
      }
    ]  
    }
  }
  
  );
};


const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Sayfası" });
};



module.exports={

  anaSayfa,
  mekanBilgisi,
  yorumEkle,

}