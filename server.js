const express = require("express");
const cors = require("cors");
const router = require("./routes");

// Cors Options
const corsOptions = {
	credentials: true,
	origin: ["http://localhost:3000"],
};

// Express
const app = express();

// Parse Json
app.use(express.json())

// CORS
app.use(cors(corsOptions));

// PORT
const PORT = process.env.PORT || 5000;

// ROUTERS
app.use(router);

// Main Route
app.get("/", (req, res) => {
	res.send(data);
});

// Listening on port
app.listen(PORT, (req, res) => {
	console.log(`Server Started on port ${PORT}`);
});
