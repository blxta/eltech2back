const controller = require("../controller/controller");

const express = require("express");

const router = express.Router();

router.get("/visitors", (req, res) => {
  controller.getAllVisitors(req, res);
});

router.post("/visitor", (req, res) => {
  controller.postVisitor(req, res);
});

router.get("/event", (req, res) => {
  controller.getEventVisitors(req, res);
});

router.get("/visitorr", (req, res) => {
  controller.getEventVisitorr(req, res);
});

router.get("/events", (req, res) => {
  controller.getAllEvents(req, res);
});

module.exports = router;
