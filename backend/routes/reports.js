const express = require("express");
const router = express.Router();
const reportsController = require("../controllers/reportsController");

router.post("/:userId", reportsController.generateReport);
router.get("/:userId", reportsController.getUserReports);

module.exports = router;
