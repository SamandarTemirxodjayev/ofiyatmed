const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');

router.get('/', userController.index);
router.post('/', userController.indexPost);
router.get('/about', userController.about);
router.get('/contact', userController.contact);
router.post('/contact', userController.contactPost);
router.get('/doctor', userController.doctor);
router.get('/faq', userController.faq);
router.get('/vacancy', userController.vacancy);
router.get('/resume', userController.resume);
router.get('/blog', userController.blog);
router.get('/blog/:id', userController.blogById);
router.get('/vacancy/:id', userController.vacancyId);
router.get('/help/1', userController.help1);
router.get('/help/2', userController.help2);
router.get('/help/3', userController.help3);

router.get('/doctor/:id', async (req, res) => {
  try {
    await userController.renderDoctor(res, req.params.id, false);
  } catch (error) {
    res.redirect('/404');
  }
});

router.get('/ru/doctor/:id', async (req, res) => {
  try {
    await userController.renderDoctor(res, req.params.id, true);
  } catch (error) {
    res.redirect('/404');
  }
});

router.get('/ru', userController.indexRU);
router.get('/ru/about', userController.aboutRU);
router.get('/ru/contact', userController.contactRU);
router.get('/ru/doctor', userController.doctorRU);
router.get('/ru/faq', userController.faqRU);
router.get('/ru/vacancy', userController.vacancyRU);
router.get('/ru/resume', userController.resumeRU);
router.get('/ru/blog', userController.blogRU);
router.get('/ru/blog/:id', userController.blogByIdRU);
router.get('/ru/vacancy/:id', userController.vacancyIdRU);
router.get('/ru/help/1', userController.help1);


router.get('/admin', adminController.admin);
router.post('/admin', adminController.adminPost);
router.get('/admin/dashboard', adminController.adminDashboard);
router.get('/admin/logout', adminController.adminLogout);
router.get('/admin/vacancy', adminController.adminVacancy);
router.get('/admin/vacancy/register', adminController.adminVacancyRegister);
router.post('/admin/vacancy/register', adminController.adminVacancyRegisterPost);
router.get('/admin/info', adminController.adminInfo);
router.post('/admin/info', adminController.adminInfoPost);
router.get('/admin/vacancy/delete/:id', adminController.adminVacancyDeleteId);
router.get('/admin/blog', adminController.adminBlog);
router.get('/admin/blog/register', adminController.adminBlogRegister);
router.post('/admin/blog/register', adminController.adminBlogRegisterPost);
router.get('/admin/blog/delete/:id', adminController.adminBlogDeleteId);

module.exports = router;