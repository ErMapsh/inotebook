const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "ermapshisagoodb%oy$ermapshisagoodb%oy$"

function fetchuserid(req, res, next){
    // Get the json web token form user and decrypt id form token add it to req object
    let token = req.header('auth-token');//we getting token form header 

    if (!token) {
        // if token is not valid then should error execute
        res.status(401).send({ error: "Please Authenticate Using a Valid Token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET_KEY);//verify token and our secret key and separate data of user
        req.user = data.user.id;
        // console.log({"userid in fetchuser" : req.user})//{ user: { id: '6195dfb813cf7fdf42afbf3e' }, iat: 1637248001 }
        next();//next function will be execute after this function
        // req.user;//{ id: '6195dfb813cf7fdf42afbf3e' }
    }
    catch(error){
        res.status(401).json({ error: "Please Authenticate Using a Valid Token" });
        console.log("Please Authenticate Using a Valid Token")
    }

}
module.exports = fetchuserid;