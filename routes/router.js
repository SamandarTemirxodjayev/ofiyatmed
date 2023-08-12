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
router.get('/vacancy/:id', userController.vacancyId);
router.get('/help/1', userController.help1);
router.get('/doctor/1', userController.doctor1);
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

module.exports = router;