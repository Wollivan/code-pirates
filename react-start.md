# First steps with a react project

In your projects folder (or a different folder if you want your project somewhere else:

- Run `npx create-react-app nameofyourproject`


## Deleting unwanted files 

Delete the following files inside the src folder

- App.test.js
- Index.css
- Logo.svg
- Reportwebvitals.js
- setupTests.js

Delete everything inside App.css

Inside app.js delete the following:

```jsx
import logo from "./logo.svg";
```

```jsx
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    Learn React
  </a>
</header>;
```

Inside index.js delete the following:

```js
import "./index.css";
```

```jsx
import reportWebVitals from "./reportWebVitals";
```

```jsx
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```


## Start the site on your local

Add a couple of words inside your `<div className="App"></div>` so you can confirm its working, and run `npm start`, it should open a new tab on `http://localhost:3000`

Woohoo you've done it! Let's make an app!
