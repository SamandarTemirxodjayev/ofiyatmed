const Emails = require("../models/Emails");
const Info = require("../models/Info");
const axios = require("axios");
const Vacancy = require("../models/Vacancy");
const Blogs = require("../models/Blog");

exports.index = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const blogs = await Blogs.find({}).sort({ _id: -1 }).limit(3);
    res.render('index', { info, blogs, url: "index" });
  } catch (error) {
    res.redirect('/404');
  }
};
exports.indexRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const blogs = await Blogs.find({}).sort({ _id: -1 }).limit(3);
    res.render('ru/index', { info, blogs, url: "index" });
  } catch (error) {
    res.redirect('/404');
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
    res.redirect('/404');
  }
}
exports.about = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('about', { info, url: "about" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.aboutRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/about', { info, url: "about" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.contact = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('contact', { info, url: "contact" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.contactRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/contact', { info, url: "contact" });
  } catch (error) {
    res.redirect('/404');
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
    res.render('doctor', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
};
exports.doctorRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/doctor', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
};
exports.faq = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('faq', { info, url: "faq" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.vacancy = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const vacancy = await Vacancy.find({});
    res.render('vacancy', { info, vacancy, url: "vacancy" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.vacancyRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const vacancy = await Vacancy.find({});
    res.render('ru/vacancy', { info, vacancy, url: "vacancy" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.vacancyId = async (req, res) => {
  try {
    const info = await Info.findOne({ id: 1 });
    const vacancy = await Vacancy.findById(req.params.id);
    if (!vacancy) return res.render('404', { info });
    res.render('vacancy-id', { info, vacancy, url: "vacancy" });
  } catch (error) {
    res.redirect('/404');
  }
};
exports.vacancyIdRU = async (req, res) => {
  try {
    const info = await Info.findOne({ id: 1 });
    const vacancy = await Vacancy.findById(req.params.id);
    if (!vacancy) return res.render('404', { info });
    res.render('ru/vacancy-id', { info, vacancy, url: "vacancy" });
  } catch (error) {
    res.redirect('/404');
  }
};
exports.help1 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('help/1', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor1 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/1', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor2 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/2', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor3 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/3', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor4 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/4', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor5 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/5', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor6 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/6', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor7 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/7', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor8 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/8', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor9 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/9', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor10 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/10', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor11 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/11', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.doctor12 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('doctor/12', { info, url: "doctor" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.resume = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('resume', { info, url: "vacancy" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.resumeRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/resume', { info, url: "vacancy" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.blog = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const blogs = await Blogs.find({}).sort({ _id: -1 });
    res.render('blog', { info, blogs, url: "blog" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.blogRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    const blogs = await Blogs.find({}).sort({ _id: -1 });
    res.render('ru/blog', { info, blogs, url: "blog" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.blogById = async (req, res) => {
  try {
    const info = await Info.findOne({ id: 1 });
    const blog = await Blogs.findById(req.params.id);
    if (!blog) return res.redirect('/404');
    res.render('blog-id', { info, blog, url: "blog" });
  } catch (error) {
    res.redirect('/404');// Render an error template or handle the error appropriately
  }
}
exports.blogByIdRU = async (req, res) => {
  try {
    const info = await Info.findOne({ id: 1 });
    const blog = await Blogs.findById(req.params.id);
    if (!blog) return res.redirect('/404');
    res.render('ru/blog-id', { info, blog, url: "blog" });
  } catch (error) {
    res.redirect('/404');// Render an error template or handle the error appropriately
  }
}