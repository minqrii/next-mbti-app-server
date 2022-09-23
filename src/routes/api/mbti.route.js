const express = require('express');
const {mbtiController} = require('../../controllers/api/index')
const router = express.Router();

router
    .route("/final")
    .get(mbtiController.getMbtiResult)

router
    .route('/truncate')
    .post(mbtiController.truncateAll)

module.exports = router;
