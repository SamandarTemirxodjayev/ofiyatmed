const Emails = require("../models/Emails");
const Info = require("../models/Info");
const axios = require("axios");
const Vacancy = require("../models/Vacancy");
const Blogs = require("../models/Blog");

const botToken = '6365368968:AAFA9Pjobe3xJ1SSvKpOhNPcV5bJzJz6KYI';


const renderTemplate = async (res, template, data) => {
  try {
    const info = await Info.findOne({ id: 1 });
    res.render(template, { info, ...data });
  } catch (error) {
    res.redirect('/404');
  }
};
exports.renderDoctor = async (res, doctorId, lang) => {
  const template = lang ? `ru/doctor/${doctorId}` : `doctor/${doctorId}`;
  renderTemplate(res, template, { url: "doctor" });
};
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

  const chatId = '@LOLvoyco467';

  const messages = `Ism: ${name}\nTelefon Raqam: ${phone_number}\nMavzu: ${msg_subject}\nXabar: ${message}`;

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: messages,
    });
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: "5420199738",
      text: messages,
    });

    res.render('alert', { text: "Xabar Muvaffiqatli jo'natildi" });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram.');
  }
};

exports.resumePost = async (req, res) => {
  const { name, phone_number, file, message } = req.body;
  console.log(req.body);

  const chatId = '@LOLvoyco467';

  const messages = `Ism: ${name}\nTelefon Nomer: ${phone_number}\nFayl URL: ${file}\nXabar: ${message}`;

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: messages,
    });

    res.json({ text: "Xabar Muvaffiqatli jo'natildi" });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message to Telegram.');
  }
}

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
exports.faqRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/faq', { info, url: "faq" });
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
exports.help2 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('help/2', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help3 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('help/3', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help4 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('help/4', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help5 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('help/5', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help6 = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('help/6', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.service = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('service', { info, url: "service" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.serviceRU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/service', { info, url: "service" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help1RU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/help/1', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help2RU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/help/2', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help3RU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/help/3', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help4RU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/help/4', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help5RU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/help/5', { info, url: "help" });
  } catch (error) {
    res.redirect('/404');
  }
}
exports.help6RU = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('ru/help/6', { info, url: "help" });
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
    res.redirect('/404');
  }
}
exports.blogByIdRU = async (req, res) => {
  try {
    const info = await Info.findOne({ id: 1 });
    const blog = await Blogs.findById(req.params.id);
    if (!blog) return res.redirect('/404');
    res.render('ru/blog-id', { info, blog, url: "blog" });
  } catch (error) {
    res.redirect('/404');
  }
}