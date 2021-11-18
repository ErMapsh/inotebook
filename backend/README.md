## this is backend of aur application
- we creating spearate backend folder for aur backend things.
- How can we creating routes for endpoints and schema model for Notes and Users.
- Storing Data in database using moongose model
- we want to validate body info so we express validator (npm install --save express-validator)
- refactor auth.js,in these we if user email is already register then is show email id is already     register, so user cant register with that email id. we alos make a collection for endpoints is easy while developing 

## using bcryptsjs module making site secure , JWT (json web token)
- npm install bcryptjs  
- bcrypts module having function like genSaltSync for generating salt value and for hashing hash function
- and this hash value will be passed to password of user while creating new user.
- jwt is nothing but after login automatically login that account, that we login in previously. that all things in json web token(npm i jsonwebtoken)

