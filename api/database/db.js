const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const getAllEvents = (response) => {
  pool.query("SELECT * FROM events", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

function getAllVisitors(response) {
  pool.query("SELECT * FROM visitros", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

function postVisitor(response, body) {
  pool.query(
    `INSERT INTO visitors (name, email, date_of_birth)
      VALUES ($1, $2, $3)
      ON CONFLICT (email) DO NOTHING;
`,
    [body.name, body.email, body.dateOfBirth],
    (error, results) => {
      if (error) {
        throw error;
      }
      pool.query(
        `INSERT INTO registrations (visitor_id, event_id, registration_date, source)
        VALUES (
          (SELECT id FROM visitors WHERE email = $1),
          $2,
          NOW(),
          $3
        );
      `,
        [body.email, body.eventId, body.source],
        (error, results) => {
          if (error) {
            throw error;
          }
          response.status(200).json();
        }
      );
    }
  );
}

function getEventVisitorr(response, id, email) {
  console.log(email);
  pool.query(
    `SELECT visitors.name, visitors.email, registrations.event_id 
    FROM visitors 
    JOIN registrations ON visitors.id = registrations.visitor_id
    WHERE visitors.email = $1 AND registrations.event_id = $2; 
`,
    [email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ data: results.rows.length });
    }
  );
}

function getEventVisitors(response, id) {
  pool.query(
    `SELECT 
    visitors.id, 
    visitors.name, 
    visitors.email, 
    visitors.date_of_birth, 
    events.title
FROM 
    visitors
INNER JOIN 
    registrations ON visitors.id = registrations.visitor_id
INNER JOIN 
    events ON registrations.event_id = events.id
WHERE 
    registrations.event_id = $1;`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
}

module.exports = {
  getAllVisitors,
  getAllEvents,
  getEventVisitors,
  postVisitor,
  getEventVisitorr,
};
