const History = require("../models/History");

const getHistory = async (req, res) => {
  const data = await History.find({
    userId: req.params.userId,
  }).sort({ createdAt: -1 });

  res.json(data);
};

module.exports = {
  getHistory,
};