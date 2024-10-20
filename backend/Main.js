    const express = require("express");
    const app = express();
    const cors = require("cors");
    const PORT = process.env.PORT || 6005;
    const cookieParser = require("cookie-parser");


    const routes = require('./api_routes/router')

    require("./connection/connection");

    app.use(cookieParser());
    app.use(express.json());

    const corsOptions = {
        origin: 'https://lottery-tes4.vercel.app',
        credentials: true
    };
    app.use(cors(corsOptions));

    app.use("/",routes);

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    })
