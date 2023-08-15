const Blogs = require("../models/Blog");
const Info = require("../models/Info");
const Vacancy = require("../models/Vacancy");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const multer = require("multer");

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
  console.log(req.body.description);
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
exports.adminInfo = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    res.render('admin/info', {info});
  } catch (error) {
    res.json({ success: false });
  }
}
exports.adminInfoPost = async (req, res) => {
  try {
    const info = await Info.findOne({id: 1});
    info.phone = req.body.phone;
    info.email = req.body.email;
    info.address = req.body.address;
    info.google_address = req.body.google_address;
    await info.save();
    res.redirect("/admin");
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
}
exports.adminBlog = async (req, res) => {
  try {
    const blog = await Blogs.find({});
    res.render('admin/blog', { blog });
  } catch (error) {
    res.json({ success: false });
  }
}
exports.adminBlogRegister = async (req, res) => {
  res.render('admin/blog-register');
}
exports.adminBlogRegisterPost = async (req, res) => {
  try {
    const publicFolderPath = "./public/blogs";

    const storage = multer.diskStorage({
      destination: publicFolderPath,
      filename: (req, file, cb) => {
        const fileId = uuidv4();
        const fileExtension = path.extname(file.originalname);
        const fileName = `${fileId}${fileExtension}`;
        cb(null, fileName);
      },
    });

    const upload = multer({ storage }).single("file");
    upload(req, res, async (err) => {
      if (err) {
        console.error("Error handling file upload:", err);
        return res.status(500).json({ message: "Error uploading the file" });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No file provided" });
      }

      const fileId = path.basename(req.file.filename, path.extname(req.file.filename));
      const blog = new Blogs({
        photo: fileId,
        file: path.extname(req.file.originalname).slice(1),
        title: req.body.title,
        simpleDescription: req.body.simpleDescription,
        description: req.body.description
      });

      await blog.save();
      
      return res.redirect("/admin/blog");
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
exports.adminBlogDeleteId = async (req, res) => {
  try {
    await Blogs.findByIdAndDelete(req.params.id);
    res.redirect("/admin/blog");
  } catch (error) {
    res.json({ success: false });
  }
}