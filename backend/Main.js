const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 6005;

const routes = require('./api_routes/router');
require("./connection/connection");

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
    origin: 'https://lottery-tes4.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
};

app.use(cors(corsOptions));

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
