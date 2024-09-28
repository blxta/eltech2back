const services = require("../services/services");

const getAllVisitors = (req, res) => {
  const { mode } = req.query;
  try {
    const events = services.getAllVisitors(res);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
const postVisitor = (req, res) => {
  const body = req.body;
  try {
    const vis = services.postVisitor(res, body);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllEvents = (req, res) => {
  try {
    const events = services.getAllEvents(res);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getEventVisitors = (req, res) => {
  const id = req.query.id;
  try {
    const events = services.getEventVisitors(res, id);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getEventVisitorr = (req, res) => {
  const { id, email } = req.query;

  try {
    const events = services.getEventVisitorr(res, id, email);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllVisitors,
  postVisitor,
  getAllEvents,
  getEventVisitors,
  getEventVisitorr,
};
