const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add the text field");
  }
  res.status(200).json({
    message: "Set goal",
  });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Goal with id ${req.params.id} has been updated`,
  });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Goal with id ${req.params.id} has been deleted`,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
