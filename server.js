require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');  // <-- YE LINE 1
app.use('/api/auth', authRoutes);             // <-- YE LINE 2
app.use('/api/posts', require('./routes/post'));

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected 🔥 Riya tera DB live hai'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));