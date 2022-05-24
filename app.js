const port = process.env.PORT || 8080;

// base Variables for Express
const path = require("path");
const express = require("express");
const flash = require("express-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

const conn = require("./lib/db");

//------------------ R O U T I N G     S E C T I O N ---------------------

const indexRoute = require("./routes/index");
const authRoute = require("./routes/auth");
const studentsRoute = require("./routes/students");
const booksRoute = require("./routes/books");

//------------------------------------------------------------------------

// Setup View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Finish Setup View Engine

// Setup Session
app.use(cookieParser());
app.use(
  session({
    secret: "ahshb#$%JPutS0M3thing",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 120000 },
  })
);
app.use(flash());
// End Session Setup

// Routing Middleware
// app.use('/students', studentsRoute);
// app.use('/auth', authRoute);
// app.use('/books', booksRoute);
app.use("/", indexRoute);
// End Routing Middleware

app.listen(port, () => console.log(`Listeening on port ${port}..`));
