const express = require('express');
const {mbtiController} = require('../../controllers/api/index')
const router = express.Router();

router
    .route("/final")
    .get(mbtiController.getMbtiResult)

module.exports = router;
