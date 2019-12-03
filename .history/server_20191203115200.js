const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect to DB
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to contact keeper API' });
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
	app.get('*');
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
