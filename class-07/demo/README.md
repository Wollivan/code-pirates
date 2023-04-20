# Starting a new Express Project

In your folder run `npm init` to create a package.json
Answer the questions it asks you OR just run `npm init -y` to skip the questions

Now you have a package.json, you can install node_modules
So run `npm i express cors dotenv nodemon` to install all the packages we need for this project
That will add these to our dependancies in the package.json, so it knows what node_modules to install to run the project.

Create a `.env` file, and add `PORT=8080` in there for later.

Once you have all that you are ready to create your `server.js` file to do all the coding fun goodness!

Inside your `server.js` add the following code:

```js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.json("You are looking at the root route of my server. How roude.");
});

app.get("/person", (request, response) => {
  response.json({ name: "Tim", age: 300, height: "very tall" });
});

app.listen(PORT, function () {
  console.log("App is listening on PORT " + PORT);
});
```

and THAT is the entire thing! Now you can start adding the other endpoints you want, following the format of the endpoints above.

To run this, in your terminal, put `nodemon server` and you can now navigate to `http://localhost:8080` to see your API in action!
