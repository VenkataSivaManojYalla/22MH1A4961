const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/register",
      req.body
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(
      error.response?.data || { error: "Unknown error occurred" }
    );
  }
});

module.exports = router;