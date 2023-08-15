const Emails = require("../models/Emails");
const Info = require("../models/Info");
const axios = require("axios");
const Vacancy = require("../models/Vacancy");
const Blogs = require("../models/Blog");

exports.index = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const blogs = await Blogs.find({});
    res.render('index', { info, blogs });
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
exports.faq = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('faq', { info });
  } catch (error) {
    res.json("404");
  }
}
exports.vacancy = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const vacancy = await Vacancy.find({});
    res.render('vacancy', { info, vacancy });
  } catch (error) {
    res.json("404");
  }
}
exports.vacancyId = async (req, res) => {
  try {
    const info = await Info.findOne({ id: 1 });
    const vacancy = await Vacancy.findById(req.params.id);
    if (!vacancy) return res.render('404', { info });
    res.render('vacancy-id', { info, vacancy });
  } catch (error) {
    res.render('404'); // Render an error template or handle the error appropriately
  }
};
exports.help1 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('help/1', { info });
  } catch (error) {
    res.json("404");
  }
}
exports.doctor1 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/1', { info });
  } catch (error) {
    res.json("404");
  }
}
exports.resume = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('resume', { info });
  } catch (error) {
    res.json("404");
  }
}
exports.blog = async (req, res) => {
  try {
    const info = await Info.find({});
    const blogs = await Blogs.find({});
    res.render('blog', { info, blogs });
  } catch (error) {
    res.json("404");
  }
}
exports.blogById = async (req, res) => {
  try {
    const info = await Info.findOne({ id: 1 });
    const blog = await Blogs.findById(req.params.id);
    if (!blog) return res.render('404', { info });
    res.render('blog-id', { info, blog });
  } catch (error) {
    res.render('404'); // Render an error template or handle the error appropriately
  }
}