const express = require('express');
const path = require('path');

const router = express.Router();

router.route('/:fileName')
  .get((req, res) => {
    const { fileName } = req.params;
    const filePath = path.join(__dirname, `../../../public/images/${fileName}`);
    res.sendFile(filePath);
  });

module.exports = router;