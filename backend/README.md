## in js , lots function reuturn promisesn so we need use await in async function
- if u not use await then some times error occur
- in my way await is promise, need to wait until he do not return his promise.

## this is backend of aur application
- we creating spearate backend folder for aur backend things.
- How can we creating routes for endpoints and schema model for Notes and Users.
- Storing Data in database using moongose model
- we want to validate body info so we express validator (npm install --save express-validator)
- refactor auth.js,in these we if user email is already register then is show email id is already     register, so user cant register with that email id. we alos make a collection for endpoints is easy while developing 
# Back-End iNotebook
# .env.local file
- in this file we can store data like JWT secret key for password , our api key.
- we can access data like ie. env.process.var

# 😀Execute a Backend and Database
- npm init for backend.
- in index.js using the express module and port, we build a backend to run on localhost.
- we can specify a route in index.js like ie. "api/auth/createuser" using the express module.
- after that we need to connect or run a mongo database, so we can connect the database using the mongoose module 
## # Back-End iNotebook

## 😀Execute a Backend and Database
- in index.js using the express module and port, we build a backend to run on localhost.
- we can specify a route in index.js like ie. "api/auth/createuser" using the express module.
- after that we need to connect or run a mongo database, so we can connect the database using the mongoose module 
## 😀Mongoose Model
- we need to create a User structure and Note structure.
- means user and notes must be in this pattern asMongoose Model
- we need to create a User structure and Note structure.
- means user and notes must be in this pattern as defined.

### ➡Creating a User model:

- while creating a user we need to create a model of the user using the Schema function of the mongoose package.
- [https://mongoosejs.com/docs/index.html](https://mongoosejs.com/docs/index.html).
- we need to be a specific username, email, and password along with the type of them. so as we know we need a unique email so we need to specify an email is unique: true and another thing like a username, the password is should be a duplicate so just mention password and username is required: true.
- we define a schema of user and condition for validation of user.
- after we need to compiling our schema into model like { const User = mongoose.model('User', userSchema); }.
- after that we will export User model like {module.exports = User}.

### ➡Creating a Notes Model:
- Notes model should be the same as the User model but we need to specify a user id too in the User note.
- [https://mongoosejs.com/docs/populate.html](https://mongoosejs.com/docs/populate.html)
- here we need to populate a user id while creating a note, which means we need to specify the user id of that user logged in.
- here we refer to a User Model that has information about users like id and more. we want just id so we get id
  user-id should be defined in a note like that 
- user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user' //
  }

# 😀Creating routes for User
### 1.Creating a user/Registering a new user: "PORT": "/api/auth/createuser"
- in this app, we are using the endpoint "localhost:5000/api/auth/createuser" for creating a new user using POST method.
- we need user info from the body in a specific pattern like we need username at least min 6 characters, email must be a valid email, password length minimum of 8 characters like that.
- so validation we using express-validator package/module.
#### Express-validator
- [https://www.npmjs.com/package/express-validator](https://www.npmjs.com/package/express-validator)
- using js distructuring in express-validator module, we import {body , validationResult}.
- we need to specify req.body is in specific pattern like ie.[body("username", "Name Must be at least 7 ").isLength({ min: 6 })].
- after specifying the pattern, if the user pattern is not the same as the express-validator define pattern then an error occurs and the error is shown through res.status.(400).json().
- if the user pattern is the same as an express-validator pattern then we find user email is already registered or not using MongoDB query.

###### checking an email along with user is already registered or not 
- if the email is already registered along with the user then we show the user already registered.
- if the email is not registered along with the user then we access to create a user with that user email.

#### Bcryptjs package, Storing hash value as password in DB
- [https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)
- hash is a one-way function, Bcryptjs package is providing a hash function.
- hash value is a combination of plaintext password and salt value.
- this hash value is will be stored in the Mongo database for user security

#### JSON-Web-Token for Authentication
- [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- JWT is a package, that provides an Authentication token.
- every time is not possible at the user interface to log in and log out, the JSON web token is working up to log out.
- JSON web token is very useful, while login or registering we send a cookie to the browser.
- we need to specify that user-id or something else that should be unique as data at the backend.
- auth token is made up of unique data of users like user id and jwt_secret_key of the owner. 


after all, things happen we send a response registration is successful.
this all things wrapped in a try block if any error occurs in try block then catch block catch error and send through response or res.send

### 2.After Authentication of user, Need to Login using right credentials "POST": "/api/auth/login"
- [https://www.npmjs.com/package/express-validator](https://www.npmjs.com/package/express-validator)
- [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- in the login page, we need again define specific patterns using express-validator.
- in these for login, we use user email and password only, so define a pattern for them.
- if any occur in validation error through validationResult, if not then need to find a user email is already registered or not.
- if the email with the user is not registered then we that point send a response as "Please try to login with correct credentials".
- if the email is registered then compare the password hash value of the user that is available in the database and enter the password while login.
- Note: while comparing a hash value, one thing should be in mind. password hash value in database and password while login begins hash value using bcryptjs package if both hash value matches then the user is genuine.
- for better security/Authentication we use jwt, we need to use unique data like the user id of the user for creating a jwt.
- using the unique value of the user we use the sign function of bcryptjs, which will create and send jwt to the browser.
- after sending a cookie, we send a response login successfully.


### 3.After login, getting a user inforamtion from json web token "POST": '/api/auth/getuser
- we need to get the data of the logged-in user to identify this user is the right user or not, that will be what we do use jwt.
#### middleware:
- we using middleware function, is similar to function nothing else.
 ![](https://www.cronj.com/blog/wp-content/uploads/redux-middleware-1024x576.png)w
- in middleware function having req, res, next parameter. in these, we know res, req but next is call after middleware function did his work and say go to where u call and execute next thing.
- if json web token is not valid/correct then we send a res as ie. res.status(401).send({ error: "Please Authenticate Using a Valid Token" });
- in middleware cookie is present in the browser while logged in we get JSON web token and parse user id. we will add user id to append to req.
- and call next() function to continue your execution.



# 😀Creating routes for Notes:
### 1.fetch all notes form database "GET": "'/api/notes/fetchallnotes" login required
- we need user data stored in a database as a note, using the get Method we can get data.
- firstly using middleware we again verify this is the correct user is logged in, after that, we use req.user.id find a note/notes in the database.
- and send a res as notes that we find using MongoDB query.

### 2. dding a new notes, using : "POST" '/api/notes/addnote. login required
- while adding a note in the database, we need a title, description from the body so define a pattern for them using express-validator.
- if any errror occur any validation, validationResult throw error and send res ie.  res.status(400).json({ errors: errors.array() }).
- as we define in the Note model, we need pass information to create a note to use the title, description, tag, and user id that we get to access a middleware.
- and save that note in the database and send a response new note was added and his info.. adding new notes, using: "POST" '/api/notes/addnote. login required 
- while adding a note in the database, we need a title, description from the body so define a pattern from them using express-validator.
- if any errror occur any validation, validationResult throw error and send res ie.  res.status(400).json({ errors: errors.array() }).
- as we define in the Note model, we need pass information to create a note using the title, description, tag, and user id that we get to access a middleware.
- and save that note in the database and send a response new note add and his info.

### 3.Update an existing note : Put '/api/notes/updatenote/:id. login required
- while Updating a note, we use a "PUT" method along with params. we can access params using request like ie req.params.id. we can get Note-id like this.
- we know we updating a note, so we need a new title, description, tag. so define a pattern for them using express-validator.
- [https://www.npmjs.com/package/express-validator](https://www.npmjs.com/package/express-validator)
- creating a newnote empty object and assigning title is newnote.title, same for description and tag.
- so we have updated new note updated the new object.
- next step is we need to verify the id of updating notes is exists or does not using  req.params.id
- if a user note exists then we got info about that note. when note submits, by who, what in title and description we go information about user and notes.
- using mongoose query ie.findByIdAndUpdate, we update a note-passing note-id and newnote. and send a res.


### 4. Delete existing node using DELETE "api/notes/deletenote" login required
- in this, we get id by params. req.params.id 
- we find a note-id that wants to delete from the database. if the note exists then we need to verify this note is its own current user or not.
- if the user own this note so delete this note and send a response delete a note
