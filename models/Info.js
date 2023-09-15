const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 1
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    default: "info@ofiyatmed.com"
  },
  address: {
    type: String,
    default: "Toshkent shahri, Sergili tumani, 5 ko'chasi, 105A uy"
  },
  addressRU: {
    type: String,
    default: "Город Ташкент, Сергиевский район, ул. 5А, дом 105а"
  },
  google_address: {
    type: String,
    default: "https://www.google.com/maps/place/Ofiyat+Med/@41.2592544,69.1848073,13z/data=!4m20!1m13!4m12!1m4!2m2!1d69.2281414!2d41.287625!4e1!1m6!1m2!1s0x38ae616383d50f33:0xb0b2a138cf353e05!2sofiyat+med!2m2!1d69.2069706!2d41.229942!3m5!1s0x38ae616383d50f33:0xb0b2a138cf353e05!8m2!3d41.229942!4d69.2069706!16s%2Fg%2F11tdmcby3n?entry=ttu"
  }
});
const Info = mongoose.model("info", infoSchema);

module.exports = Info;
