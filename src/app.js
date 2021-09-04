const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
require("./db/conn");
const port = process.env.PORT || 4000;

const studentRouter = require("./routers/students");
const app = express();

morgan.token("id", function getId(req) {
  return req.id;
});

morgan.token("param", function (req, res, param) {
  return "userToken";
});

app.use(assignid);

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan(':id :param :method :status :url "HTTP/:http-version"'));
app.use(
  morgan(':id :param :method :status :url "HTTP/:http-version"', {
    stream: accessLogStream,
  })
);

app.use(express.json());
app.use(studentRouter);

function assignid(req, res, next) {
  req.id = uuidv4();
  next();
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
