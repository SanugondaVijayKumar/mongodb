const express = require("express");
const router = express.Router();
const purchase = require("../controllers/purchase");
const auth = require("../controllers/auth");

router
  .route("/premiummembership")
  .get(auth.whichUser, purchase.getPremiumMemebership)
  .post(auth.whichUser, purchase.updateTransactionDetail);

module.exports = router;
