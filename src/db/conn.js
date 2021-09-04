const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Student_Data", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection is Successfull ..........");
  })
  .catch((e) => {
    console.log("No connection");
  });
