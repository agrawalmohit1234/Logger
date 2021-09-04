const express = require("express");
const Student = require("../models/students");
const router = new express.Router();

router.get("/", (req, res) => {
  res.send("Welcome Mohit Agrawal !!!");
});

router.post("/students", async (req, res) => {
  console.log(req.body);
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/students", async (req, res) => {
  try {
    const studentData = await Student.find();
    res.status(200).send(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const studentData = await Student.find({ _id: id });
    res.status(200).send(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/students/phone/:phone", async (req, res) => {
  try {
    const phone = req.params.phone;
    const studentData = await Student.find({ phone: phone });
    res.status(200).send(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/students/name/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const studentData = await Student.find({ name: name });
    res.status(200).send(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateStudentData = await Student.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(UpdateStudentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const DeleteStudentData = await Student.findByIdAndDelete({ _id: id });
    res.status(200).send(DeleteStudentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
