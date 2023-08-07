const Emails = require("../models/Emails");
const Info = require("../models/Info");

exports.index = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('index', { info });
  } catch (error) {
    res.render("404");
  }
};
exports.indexPost = async (req, res) => {
  try {
    const email = Emails.findOne({ email: req.body.email });
    if (email) {
      return res.render('alert', { text: "Ushbu Pochta Manzili tizimda mavjud" });
    }
    const newEmail = await new Emails({
      email: req.body.email
    });
    await newEmail.save();
    const text = "Pochta manzilingiz saqlandi";
    res.render('alert', { text });
  } catch (error) {
    res.render("404");
  }
}
exports.about = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('about', { info });
  } catch (error) {
    res.render("404");
  }
}
exports.contact = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('contact', { info });
  } catch (error) {
    res.render("404");
  }
}