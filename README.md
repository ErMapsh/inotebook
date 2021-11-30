## Inotebook

- reactjs project 3 : inotebook
- Yt Playlist of codewithharry: [https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ)

## concurrently package

- if any by chance i forgot [https://www.youtube.com/watch?v=hfjQLssL0hs&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=55](https://www.youtube.com/watch?v=hfjQLssL0hs&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=55)
- while working on frontend, installing react-router-dom and concurrently [npm i react-router-dom concurrently] here 2 packages are installing simultaneously. we need backend and forntend simultaneously thats why use concurrently package.
- while using concurrently we need configure package.json file in backend and frontend

## Context api - very useful thing
- when app begin complex there if we use usestate var, its begin difficult/begin headache to pass props to one to another , after to anothercomponent, thats why we use context api. we made context file and use is state, update it. using this we can reduce drawback of usestate.

## UseLocation in react router dom;
- in react-router-dom have useLocation function that we use
- The useLocation hook returns the location object that represents the current URL.You can think about it like a useState that returns a new location whenever the URL changes.
- in a situation where you would like to trigger a new “page view” event using your web analytics tool whenever a new page loads.

## CORS 
- [https://expressjs.com/en/resources/middleware/cors.html](https://expressjs.com/en/resources/middleware/cors.html)
- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. (npm i cors)
- An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

- Express Cors site to referance
- we need to use some thing from our backend to access