const express = require("express");
const router = express.Router();

const premium = require("../controllers/premium");

router.route("/showleaderboard").get(premium.showleaderboard);

module.exports = router;
