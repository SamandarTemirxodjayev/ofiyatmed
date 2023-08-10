const Vacancy = require("../models/Vacancy");

exports.admin = async (req, res) => {
  res.render('admin');
}
exports.adminPost = async (req, res) => {
  if (req.body.username == 'admin' && req.body.password == 'admin') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
}
exports.adminDashboard = async (req, res) => {
  res.render('admin/dashboard');
}
exports.adminLogout = async (req, res) => {
  res.render('admin/logout');
}
exports.adminVacancy = async (req, res) => {
  try {
    const vacancy = await Vacancy.find({});
    res.render('admin/vacancy', { vacancy });
  } catch (error) {
    res.json({ success: false });
  }
}
exports.adminVacancyRegister = async (req, res) => {
  res.render('admin/vacancy-register');
}
exports.adminVacancyRegisterPost = async (req, res) => {
  try {
    const vacancy = new Vacancy({
      title: req.body.title,
      simpleDescription: req.body.simpleDescription,
      description: req.body.description,
    });
    await vacancy.save();
    res.redirect("/admin/vacancy");
  } catch (error) {
    res.json({ success: false });
  }
}
exports.adminVacancyDeleteId = async (req, res) => {
  try {
    await Vacancy.findByIdAndDelete(req.params.id);
    res.redirect("/admin/vacancy");
  } catch (error) {
    res.json({ success: false });
  }
}