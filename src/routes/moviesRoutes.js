const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/search', moviesController.search);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/recommended/:order?', moviesController.recommended);
router.get('/movies/new', moviesController.new)
router.post('/movies/create', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/edit/:id', moviesController.processEdit);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);

module.exports = router;