const express = require("express");
const user = require("../controllers/user");
const auth = require("../controllers/auth");
const expense = require("../controllers/expense");

const router = express.Router();

router.route("/").post(user.createUser);
router.route("/login").post(user.login);
router
  .route("/download")
  .get(auth.whichUser, expense.downloadExpense);

module.exports = router;
