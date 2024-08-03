// form.addEventListener("submit" , ()=> {
//     const login = {
//         email: email.value,
//         password: password.value
//     }
//     fetch("/api/login" , {
//         method:"post",
//         body:JSON.stringify(login),
//         headers:{
//             "Content-Type" : "application/json"
//         }
//     }).then(res => res.json())
//     .then(data => {
//         if(data.status == "error"){
//             success.style.display="none";
//             error.style.display="block";
//             error.innerText = data.error;
//         }
//         else{
//             success.style.display="block";
//             error.style.display="none";
//             error.innerText = data.success;
//         }
//     })
// })


const jwt = require("jsonwebtoken")
const db = require("../routes/db_config")
const bcrypt = require("bcryptjs");

const login = async (req , res ) => {
    const {email , password } =req.body;
    db.query('SELECT * from users WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;
        if(result.length || await bcrypt.compare(password , result[0].password) ){
            return res.send("incorrect email or password")
        }
        else{
            const token = jwt.sign( { id:result[0].id} , process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES,
            });
            const cookieOptions = {
                expiresIn: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                ),
                httpOnly: true
            }
            res.cookie('userSave', token, cookieOptions);
            res.send("User has been logged in")
        }
    })

}

module.exports = login;
