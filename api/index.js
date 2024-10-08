const axios = require("axios");
// const express = require("express");
// const cors = require("cors");

require("dotenv").config();

// const app = express();
// app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

module.exports = async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`
    );
    res.json(response.data); // Send the weather data back to the frontend
  } catch (error) {
    res.status(500).send("Error fetching weather data");
  }
};

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
