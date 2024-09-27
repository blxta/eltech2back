const Meds = require("../database/Meds");

const getAllVisitors = (res) => {
  try {
    const allVisitors = Meds.getAllVisitors(res);
    return allVisitors;
  } catch (error) {
    throw error;
  }
};

const getEventVisitors = (res, id) => {
  try {
    const eventVisitors = Meds.getEventVisitors(res, id);
    return eventVisitors;
  } catch (error) {
    throw error;
  }
};

const getEventVisitorr = (res, id, email) => {
  try {
    const eventVisitors = Meds.getEventVisitorr(res, id, email);
    return eventVisitors;
  } catch (error) {
    throw error;
  }
};
const postVisitor = (res, body) => {
  try {
    const eve = Meds.postVisitor(res, body);
    return eve;
  } catch (error) {
    throw error;
  }
};

const getAllEvents = (res) => {
  try {
    const allEvents = Meds.getAllEvents(res);
    return allEvents;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllVisitors,
  postVisitor,
  getAllEvents,
  getEventVisitors,
  getEventVisitorr,
};
