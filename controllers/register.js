// form.addEventListener("submit" , ()=> {
//     const reqister = {
//         email: email.value,
//         password: password.value
//     }
//     fetch("/api/register" , {
//         method:"post",
//         body:JSON.stringify(reqister),
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

const db = require("../routes/db_config")
const bcrypt = require("bcryptjs");

const register = async (req , res ) => {
    const {email , password : Npassword } =req.body;
    console.log(email);
    db.query('SELECT email from users WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;
        if(result[0]) return res.send("email has been already registered")
        else{
            const password = await bcrypt.hash(Npassword , 8);
            console.log(password)
            db.query('INSERT INTO users SET ?', {  email: email, password: password}, (err, results) => {
                if(error) throw error
                return res.send("User has been registered")
            })

        }
    })

}

module.exports = register;


