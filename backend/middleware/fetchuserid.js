const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "ermapshisagoodb%oy$ermapshisagoodb%oy$"

const fetchuserid = (req, res) => {
    // Get the json web token form user and decrypt id form token add it to req object
    let token = req.header('auth-token');//we getting token form header 
    if (!token) {
        // if token is not valid then should error execute
        res.status(401).send({ error: "Please Authenticate Using a Valid Token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET_KEY);//verify token and our secret key and separate data of user
        req.user = data.user;
        console.log(data)//{ user: { id: '6195dfb813cf7fdf42afbf3e' }, iat: 1637248001 }
        // req.user;//{ id: '6195dfb813cf7fdf42afbf3e' }
    }
    catch{
        res.status(401).json({ error: "Please Authenticate Using a Valid Token" });
    }

    next();//next function will be execute after this function
}
module.exports = fetchuserid;