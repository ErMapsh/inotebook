# Back-End iNotebook

## 😀Execute a Backend and Database
- in index.js using express module and port, we build a backend to run on localhost.
- we can specify a route in index.js like ie. "api/auth/createuser" using express module.
- after that we need to connect or run a mongo database, so we can connect database using mongoose module 
## # Back-End iNotebook

## 😀Execute a Backend and Database
- in index.js using express module and port, we build a backend to run on localhost.
- we can specify a route in index.js like ie. "api/auth/createuser" using express module.
- after that we need to connect or run a mongo database, so we can connect database using mongoose module 
## 😀Mongoose Model
- we need to create User structure and Note structure.
- means user and notes must be in this pattern asMongoose Model
- we need to create User structure and Note structure.
- means user and notes must be in this pattern as define.

### ➡Creating a User model:

- while creating a user we need create an model of user using Schema function of mongoose package.
- [https://mongoosejs.com/docs/index.html](https://mongoosejs.com/docs/index.html).
- we need to be a specify username, email and password along with type of them. so as we know we need a unique email so we need to a specify a email is uniqe: true and another things like a username, password is should be a duplicate so just we their mention password and username is required: true.
- we define a schema of user and condition for validation of user.
- after we need to compiling our schema into model like { const User = mongoose.model('User', userSchema); }.
- after that we will export User model like {module.exports = User}.

### ➡Creating an Notes Model:
- Notes model should be same as User model but we need to specify a userid too in Usernote.
- [https://mongoosejs.com/docs/populate.html](https://mongoosejs.com/docs/populate.html)
- here we need to populate a userid while creating a note, means we need to specify userid of that user logged in.
- here we refer a User Model that have inforamtion of user like id and more. we want just id so we get id
  userid should be define in a note like that 
- user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user' //
  }


# 😀Creating routes for User
### ➡1.Creating a user/Registering a new user:
- in this app, we are use endpoint "localhost:5000/api/auth/createuser" for creating new user using POST method.
- we need userinfo from body in specific pattern, like we need username at least min 6 character, email must be valid email, password length minimum 8 character like that.
- so validation we using express-validator package/module.
#### Express-validator
- [https://www.npmjs.com/package/express-validator](https://www.npmjs.com/package/express-validator)
- using js distructuring in express-validator module, we import {body , validationResult}.
- we need to specify req.body is in specific pattern like ie.[body("username", "Name Must be at least 7 ").isLength({ min: 6 })].
- after specifying pattern, if user pattern is not same as express-validator define pattern then error occur and error show by through res.status.(400).json().
- if user pattern is same as express-validator pattern then we find user email is already register or not using mongodb query.

###### checking a email along with user is already register or not 
- if email is already register along with user then we shows user already registered.
- if email is not register along with user then we access to create a user with that user email.

#### Bcryptjs package, Storing hash value as password in db
- [https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)
- hash is one way function, Bcryptjs package is providing a hash function.
- hash value is combination of plaintext password and salt value.
- this hash value is will we store in mongo database for user security

#### Json-Web-Token for Authentication
- [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- JWT is package, that provide Authentication token.
- everytime is not possible at user interface to login and logout, json webtoken is working upto logut.
- jwt is very useful, while login or registering we send a cookie to browser.
- we need to specify of that user id or something else that should be uniqe as data at backend.
- auth token is made up by uniqe data of user like user id and jwt_secret_key of owner. 


after all thing happen we send a response registeration is successfull.
this all things wrap in try block, if any error occur in try block then catch block catch error  and send through response or res.send

### ➡2.After Authentication of user, Need to Login using right credentials
- [https://www.npmjs.com/package/express-validator](https://www.npmjs.com/package/express-validator)
- [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)- in login page, we need again define specific pattern using express-validator.
- in these for login we using user email and password only, so define a pattern for them.
- if any occur in validation error through validationResult, if not then need to find a user email is already register or not.
- if email with user is not register then we that point send a response as "Please try to login with correct credentials".
- if email is register then compare password hash value of user that available in database and  entering password while login.
- Note: while comparing a hash value, one thing should be in mind. password hash value in database and password while login is begin hash value  using bcryptjs package, if both hash value matches then user is geniune.
- for better security/Authentication we using jwt, we need use uniqe data like userid of user for creating a jwt.
- using uniqe value of user we use sign function of bcryptjs, that will create and send jwt to browser.
- after sending a cookie, we send a response login successfull.


### ➡3.After login, getting a user inforamtion from json web token
- we need to get a data of loggedin user to identify this user is right user or not, that will be we do using jwt.
#### middleware:
- we using middleware function, is similar to function nothing else.
 ![](https://www.cronj.com/blog/wp-content/uploads/redux-middleware-1024x576.png)w
- in middleware function having req, res, next parameter. in these we know res, req but next is call after middleware function done his work and say go to where u call and execute next thing.
- if json web token is not valid/correct then we send a res as ie. res.status(401).send({ error: "Please Authenticate Using a Valid Token" });
- in middleware cookie is present in browser while logged-in we get json web token and parse userid. we will add userid to append to req.
- and call next() function to continue your execution.



# 😀Creating routes for Notes:
