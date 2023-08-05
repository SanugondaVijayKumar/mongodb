const express = require("express");
const expense = require("../controllers/expense");
const auth = require("../controllers/auth");

const router = express.Router();

router
  .route("/addexpense")
  .post(auth.whichUser, expense.createExpense);

router
  .route("/")
  .get(auth.whichUser, expense.getAllExpenses);

router
  .route("/:id")
  .delete(auth.whichUser, expense.deleteExpense);

module.exports = router;
