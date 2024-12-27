// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

// Import module

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.getComments);
router.get('/create', commentController.createComment);
router.post('/create', commentController.postComment);
router.get('/:id/delete', commentController.deleteComment);




