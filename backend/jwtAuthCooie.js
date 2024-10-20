const jwt = require('jsonwebtoken');

exports.jwtAuthCookie = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(user);
        req.user = user;
        next();
    } catch (error) {
        console.log("cookie not present")
        res.clearCookie("token");
        return res.redirect("/");
    }
}