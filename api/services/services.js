const Events = require("../database/db");

const getAllVisitors = (res) => {
  try {
    const allVisitors = Events.getAllVisitors(res);
    return allVisitors;
  } catch (error) {
    throw error;
  }
};

const getEventVisitors = (res, id) => {
  try {
    const eventVisitors = Events.getEventVisitors(res, id);
    return eventVisitors;
  } catch (error) {
    throw error;
  }
};

const getEventVisitorr = (res, id, email) => {
  try {
    const eventVisitors = Events.getEventVisitorr(res, id, email);
    return eventVisitors;
  } catch (error) {
    throw error;
  }
};
const postVisitor = (res, body) => {
  try {
    const eve = Events.postVisitor(res, body);
    return eve;
  } catch (error) {
    throw error;
  }
};

const getAllEvents = (res) => {
  try {
    const allEvents = Events.getAllEvents(res);
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
