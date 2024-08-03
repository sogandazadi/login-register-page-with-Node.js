const db = require("../routes/db_config")
const jwt = require("jsonwebtoken")
const loggedIn = (req , res) => {
    if(req.cookies.userRegistered) return next();
    try{
        const decoded = jwt.verify(req.cookies.userRegistered , process.env.JWT_SECRET);
        db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, results) => {
            if (!results) {
                return next();
            }
            req.user = results[0];
            return next();
        });

    }catch(err){
        if(err) return next();
    }
}

module.exports = loggedIn;