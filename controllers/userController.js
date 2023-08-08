const Emails = require("../models/Emails");
const Info = require("../models/Info");
const axios = require("axios");

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
exports.contactPost = async (req, res) => {
  const { name, phone_number, msg_subject, message } = req.body;

  const botToken = '6365368968:AAFA9Pjobe3xJ1SSvKpOhNPcV5bJzJz6KYI';
  const chatId = '@LOLvoyco467';

  const messages = `Name: ${name}\nPhone: ${phone_number}\nSubject: ${msg_subject}\nText: ${message}`;

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: messages,
    });

    res.render('alert', { text: "Xabar Muvaffiqatli jo'natildi" });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram.');
  }
};
exports.doctor = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor', { info });
  } catch (error) {
    res.render("404");
  }
};