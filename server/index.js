require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Mongodb Connected"))
  .catch(err => console.error("Connection Failed", err));


const packageRoutes = require('./routes/packageRoutes');
app.use('/api/packages', packageRoutes);


app.get('/', (req, res) => {
  res.send("API is active");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});