var express = require("express");
var router = express.Router();

// slash gördüğün zaman function çalışır
const anaSayfa = function (req, res, next) {
  res.render("anasayfa", { title: "Ana Sayfa" });
};


const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi", { title: "Mekan Bilgisi" });
};


const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Sayfası" });
};



module.exports={

  anaSayfa,
  mekanBilgisi,
  yorumEkle,

}