const express = require("express");
const db = require("./routes/db_config");
const cookie = require("cookie-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const sequelize = require('./routes/db_config');
dotenv.config();
const cors = require("cors");
const User = require("./model/User");

sequelize.sync().then(() => {
  console.log('Database synchronized');
});



const app = express();
const port = 3000;
//app.use("/js", express.static(__dirname + " " + "./public/js"))

app.set("view engine" , "ejs");
app.set("views" , "./views")

app.use(cookie())
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// db.connect((err) => {
//     if(err) throw err
//     console.log("Database connected")
// })

app.use("/api" , require("./controllers/authentication"));
app.use("/" , require("./routes/pages"))

app.listen(port, () => console.log(`Server Connected to port ${port}`))

