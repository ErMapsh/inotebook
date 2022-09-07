# Inotebok - The TO-DO Application

![Homepage](/Client/src/images/Inotebook/Notes.png)__
![Login](/Client/src/images/Inotebook/Login.png)__
![Sign](/Client/src/images/Inotebook//sign.png)__
![Update](/Client/src/images/Inotebook/Update%20Notes.png)__


- Nodemon : In linux - npm install nodemon --save-dev

# Front-end inotebook
- reactjs project 3 : inotebook
- for web app we create a application using npx create-react-app 
- as we know we need a name for our app, so simply write at end of npx create-react-app cmd like ie.npx create-react-app appname.
- this web app based on react function based components, cause function based component having hooks that are more userful like context Api, ref. 
- Yt Playlist of codewithharry: [https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ)

## concurrently package to run both simultaneously
- if any by chance i forgot [https://www.youtube.com/watch?v=hfjQLssL0hs&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=55](https://www.youtube.com/watch?v=hfjQLssL0hs&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=55)
- while working on frontend, installing react-router-dom and concurrently [npm i react-router-dom concurrently] here 2 packages are installing simultaneously. we need backend and forntend simultaneously thats why use concurrently package.
- while using concurrently we need configure package.json file in backend and frontend

## Context api - very useful thing
- when app begin complex there if we use usestate var, its begin difficult/begin headache to pass props to one to another , after to anothercomponent, thats why we use context api. we made context file and use is state, update it. using this we can reduce drawback of usestate.

## UseLocation in react router dom;
- in react-router-dom have useLocation function that we use
- The useLocation hook returns the location object that represents the current URL.You can think about it like a useState that returns a new location whenever the URL changes.
- in a situation where you would like to trigger a new “page view” event using your web analytics tool whenever a new page loads.

## CORS package for accencing backend
- [https://expressjs.com/en/resources/middleware/cors.html](https://expressjs.com/en/resources/middleware/cors.html)
- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. (npm i cors)
- An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

- Express Cors site to referance
- we need to use some thing from our backend to access

## Ref in hooks
- when we want refer to specific thing in code the we refer their

# Redux in reactjs
- [https://www.youtube.com/watch?v=JZQWKYjfZlQ&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=73](https://www.youtube.com/watch?v=JZQWKYjfZlQ&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=73)
- redux helping to manage state variable 