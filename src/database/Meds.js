const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/example.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the example database.");
});

function getAllVisitors(res) {
  db.all("SELECT * FROM visitors", (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      return res.send({ status: "OK", data: rows });
    }
  });
}

function getAllEvents(res) {
  db.all("SELECT * FROM events ", (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      return res.send({ status: "OK", data: rows });
    }
  });
}

function postVisitor(res, body) {
  try {
    db.serialize(() => {
      db.run("BEGIN TRANSACTION");
      db.run(`INSERT OR IGNORE INTO visitors (name, email, date_of_birth)
  VALUES ('${body.name}', '${body.email}', '${body.dateOfBirth}');
  `);
      db.run(`INSERT INTO registrations (visitor_id, event_id, registration_date, source)
        VALUES (
            COALESCE(
                (SELECT id FROM visitors WHERE email = '${body.email}'),
                last_insert_rowid()
          ),
    ${body.eventId},
    DATE('now'),
    '${body.source}'
  );`);
      db.run("COMMIT");
    });

    return res.send({ status: "OK" });
  } catch (error) {
    console.error("Transaction error:", error);
    db.run("ROLLBACK");
  }
}

function getEventVisitorr(res, id, email) {
  db.all(
    `
    SELECT visitors.name, visitors.email, registrations.event_id 
    FROM visitors 
    JOIN registrations ON visitors.id = registrations.visitor_id
    WHERE visitors.email = '${email}' AND registrations.event_id = ${id}; 
`,
    (err, rows) => {
      if (err) {
        console.error(err.message);
      } else {
        return res.send({ status: "OK", data: rows.length });
      }
    }
  );
}

function getEventVisitors(res, id) {
  db.all(
    `SELECT visitors.id, visitors.name, visitors.email, visitors.date_of_birth
FROM visitors
INNER JOIN registrations ON visitors.id = registrations.visitor_id
WHERE registrations.event_id = ${id}`,
    (err, rows) => {
      if (err) {
        console.error(err.message);
      } else {
        return res.send({ status: "OK", data: rows });
      }
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
