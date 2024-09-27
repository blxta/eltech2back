const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/example.db");

const schemaQueries = [
  `CREATE TABLE visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    name TEXT NOT NULL,              
    email TEXT NOT NULL UNIQUE,            
    date_of_birth DATE NOT NULL    
)`,
  `CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    title TEXT NOT NULL,                   
    description TEXT NOT NULL,             
    event_date DATE NOT NULL,              
    organizer TEXT NOT NULL                
)`,
  `CREATE TABLE registrations (
    visitor_id INTEGER,                    
    event_id INTEGER,                      
    registration_date DATE NOT NULL,  
    source TEXT NOT NULL,          
    FOREIGN KEY (visitor_id) REFERENCES visitors(id),   
    FOREIGN KEY (event_id) REFERENCES events(id)        
)`,
];

// Create the tables based on the schema
db.serialize(() => {
  schemaQueries.forEach((query) => {
    db.run(query, (err) => {
      if (err) {
        console.error("Error creating table:", err.message);
      } else {
        console.log("Table created successfully");
      }
    });
  });
});

function insertIn() {
  const insert = [
    `
  INSERT INTO visitors (name, email, date_of_birth)     
 VALUES
('John Doe', 'john.doe@example.com', '1990-05-15' ),
('Jane Smith', 'jane.smith@example.com', '1985-08-22' ),
('Alex Johnson', 'alex.johnson@example.com', '1992-11-03' ),
('Emily Davis', 'emily.davis@example.com', '1998-01-19' ),
('Chris Brown', 'chris.brown@example.com', '1995-07-30' ),
('Michael Taylor', 'michael.taylor@example.com', '1991-06-12' ),
('Sarah Wilson', 'sarah.wilson@example.com', '1987-03-25' ),
('David Moore', 'david.moore@example.com', '1989-09-11' ),
('Laura Clark', 'laura.clark@example.com', '1993-07-19' ),
('Daniel Walker', 'daniel.walker@example.com', '1994-04-22' ),
('Sophia Hall', 'sophia.hall@example.com', '1986-11-13' ),
('James White', 'james.white@example.com', '1992-02-08' ),
('Olivia Martinez', 'olivia.martinez@example.com', '1991-08-03' ),
('Lucas Anderson', 'lucas.anderson@example.com', '1995-10-14' ),
('Mia Thomas', 'mia.thomas@example.com', '1994-12-28' ),
('Noah Jackson', 'noah.jackson@example.com', '1988-05-23' ),
('Ava Lopez', 'ava.lopez@example.com', '1990-09-17' ),
('Liam Gonzalez', 'liam.gonzalez@example.com', '1993-01-06' ),
('Isabella Harris', 'isabella.harris@example.com', '1995-03-30' ),
('Ethan Young', 'ethan.young@example.com', '1989-12-09' ),
('Charlotte Turner', 'charlotte.turner@example.com', '1997-02-18' ),
('Benjamin Scott', 'benjamin.scott@example.com', '1992-11-20' ),
('Amelia Green', 'amelia.green@example.com', '1986-10-05' ),
('Henry Baker', 'henry.baker@example.com', '1988-04-27' ),
('Ella King', 'ella.king@example.com', '1996-06-02' ),
('Sebastian Adams', 'sebastian.adams@example.com', '1993-07-08' ),
('Grace Campbell', 'grace.campbell@example.com', '1995-09-11' ),
('Jack Rivera', 'jack.rivera@example.com', '1991-01-23' ),
('Zoe Wright', 'zoe.wright@example.com', '1987-12-31' ),
('Emma Patterson', 'emma.patterson@example.com', '1994-05-10' ),
('Matthew Bell', 'matthew.bell@example.com', '1993-03-12' ),
('Sophia Garcia', 'sophia.garcia@example.com', '1992-07-22' ),
('Jacob Carter', 'jacob.carter@example.com', '1991-11-14' ),
('Evelyn Parker', 'evelyn.parker@example.com', '1990-02-09' ),
('Alexander Murphy', 'alexander.murphy@example.com', '1989-12-17' ),
('Lily Bailey', 'lily.bailey@example.com', '1995-08-23' ),
('Jackson Flores', 'jackson.flores@example.com', '1994-04-19' ),
('Ella Nelson', 'ella.nelson@example.com', '1993-09-14' ),
('Aiden Reed', 'aiden.reed@example.com', '1996-10-10' ),
('Natalie Mitchell', 'natalie.mitchell@example.com', '1997-05-03' ),
('Samuel Perez', 'samuel.perez@example.com', '1992-06-25' ),
('Victoria Roberts', 'victoria.roberts@example.com', '1987-09-28' ),
('Logan Phillips', 'logan.phillips@example.com', '1991-07-11' ),
('Aubrey Evans', 'aubrey.evans@example.com', '1996-03-18' ),
('Daniel Turner', 'daniel.turner@example.com', '1993-10-05' ),
('Hazel Torres', 'hazel.torres@example.com', '1994-11-27' ),
('Anthony Peterson', 'anthony.peterson@example.com', '1989-04-20' ),
('Lillian Gray', 'lillian.gray@example.com', '1990-01-15' ),
('Henry Ramirez', 'henry.ramirez@example.com', '1988-08-12' ),
('Scarlett Hughes', 'scarlett.hughes@example.com', '1996-09-01' ),
('Owen Price', 'owen.price@example.com', '1991-06-08' ),
('Aria Sanchez', 'aria.sanchez@example.com', '1994-03-22' ),
('Sebastian Howard', 'sebastian.howard@example.com', '1993-12-11' ),
('Zoe Brooks', 'zoe.brooks@example.com', '1995-02-16' ),
('Mason Kelly', 'mason.kelly@example.com', '1997-07-29' ),
('Chloe Long', 'chloe.long@example.com', '1992-04-07' ),
('Lucas Sanders', 'lucas.sanders@example.com', '1989-10-30' ),
('Avery Foster', 'avery.foster@example.com', '1990-09-05' ),
('James Ross', 'james.ross@example.com', '1988-11-21' ),
('Isabella Powell', 'isabella.powell@example.com', '1994-06-17' ),
('Grayson Cooper', 'grayson.cooper@example.com', '1995-12-08' ),
('Sofia Ward', 'sofia.ward@example.com', '1993-08-15' ),
('Elijah Garrett', 'elijah.garrett@example.com', '1987-02-12' ),
('Amelia West', 'amelia.west@example.com', '1991-01-28' ),
('Mila Bryant', 'mila.bryant@example.com', '1997-06-14' ),
('Oliver Wood', 'oliver.wood@example.com', '1995-04-02' ),
('Abigail Cole', 'abigail.cole@example.com', '1989-03-20' ),
('Lucas Jenkins', 'lucas.jenkins@example.com', '1992-12-01' ),
('Harper Perry', 'harper.perry@example.com', '1993-11-16' ),
('Jayden Kim', 'jayden.kim@example.com', '1994-07-21' );
`,
    `
INSERT INTO events (title, description, event_date, organizer)
VALUES
('Tech Conference 2024', 'A conference on the latest trends in technology and innovation.', '2024-11-15', 'Tech Innovators'),
('Art & Culture Festival', 'Celebrating local and international art and culture.', '2024-10-12', 'City Art Council'),
('Health and Wellness Expo', 'Promoting healthy living and wellness products.', '2024-09-30', 'Wellness Inc.'),
('Business Startup Summit', 'A platform for aspiring entrepreneurs and startups.', '2024-12-05', 'Startup World'),
('Global Environmental Forum', 'Discussions on climate change and sustainability.', '2024-10-20', 'Eco Green Corp'),
('Music & Arts Festival', 'Live music performances and art exhibitions from local artists.', '2024-10-05', 'Creative Minds'),
('Food & Wine Fair', 'A culinary event with the best chefs and wineries in the region.', '2024-11-02', 'Gourmet Alliance'),
('Tech & Innovation Expo', 'Showcasing cutting-edge technology and future innovations.', '2024-12-01', 'Future Tech Group'),
('Sustainability Conference', 'Exploring sustainable business practices and innovations.', '2024-09-25', 'Green Future Association'),
('International Film Festival', 'A celebration of international films and filmmakers.', '2024-09-19', 'Film Society'),
('Startup Bootcamp', 'Workshops and networking for aspiring entrepreneurs.', '2024-11-18', 'Entrepreneur Hub'),
('Sports & Fitness Expo', 'A showcase of the latest sports and fitness trends.', '2024-10-28', 'Fit World Expo'),
('Gaming Convention', 'Explore the latest in gaming technology and entertainment.', '2024-09-15', 'GameCon Inc.'),
('Local Crafts Market', 'Handmade crafts and products from local artisans.', '2024-11-21', 'Craft Creators'),
('Robotics Expo', 'A showcase of the latest advancements in robotics.', '2024-10-30', 'Robotics World'),
('Photography Exhibition', 'A gallery of work from international photographers.', '2024-11-12', 'Photo Collective'),
('AI & Machine Learning Summit', 'Exploring the latest trends in artificial intelligence.', '2024-12-10', 'AI Innovations'),
('Culinary Arts Festival', 'A celebration of culinary excellence and innovation.', '2024-09-10', 'Chefs Guild'),
('Entrepreneurship Forum', 'Discussions on business growth and entrepreneurship.', '2024-11-09', 'Business Leaders Network'),
('Fashion & Lifestyle Expo', 'Showcasing the latest trends in fashion and lifestyle.', '2024-12-03', 'Style Network'),
('Environmental Awareness Day', 'A day dedicated to raising awareness about environmental issues.', '2024-09-07', 'Green Earth'),
('Music Industry Conference', 'Insights into the latest trends in the music industry.', '2024-10-15', 'Music Business Association'),
('Tech Innovators Forum', 'Discussions on the future of technology.', '2024-09-21', 'Tech Forum Group'),
('Local Farmers Market', 'Support local farmers by visiting the market.', '2024-09-18', 'Farmers Alliance'),
('Blockchain Summit', 'Exploring the future of blockchain technology and its applications.', '2024-12-07', 'Blockchain Innovators');

`,
  ];

  insert.forEach((q) =>
    db.run(q, (err) => {
      if (err) {
        console.error("Error inserting visitors", err.message);
      } else {
        console.log("inserted visitors succesfull");
      }
    })
  );
}

// Количество посетителей и событий
const numVisitors = 100;
const numEvents = 25;
let registrations = [];

// Список дат для событий
const eventDates = {
  1: "2024-11-15",
  2: "2024-10-12",
  3: "2024-09-30",
  4: "2024-12-05",
  5: "2024-10-20",
  6: "2024-10-05",
  7: "2024-11-02",
  8: "2024-12-01",
  9: "2024-09-25",
  10: "2024-09-19",
  11: "2024-11-18",
  12: "2024-10-28",
  13: "2024-09-15",
  14: "2024-11-21",
  15: "2024-10-30",
  16: "2024-11-12",
  17: "2024-12-10",
  18: "2024-09-10",
  19: "2024-11-09",
  20: "2024-12-03",
  21: "2024-09-07",
  22: "2024-10-15",
  23: "2024-09-21",
  24: "2024-09-18",
  25: "2024-12-07",
};

// Функция для генерации случайной даты регистрации до даты события
function randomRegistrationDate(eventDate) {
  const eventDateObj = new Date(eventDate);
  const deltaDays = Math.floor(Math.random() * 30) + 1; // Случайное количество дней до события (1-30)
  eventDateObj.setDate(eventDateObj.getDate() - deltaDays);
  return eventDateObj.toISOString().split("T")[0]; // Возвращаем дату в формате YYYY-MM-DD
}

// Генерация регистраций для каждого посетителя
for (let visitorId = 1; visitorId <= numVisitors; visitorId++) {
  // Случайное количество событий для регистрации (1-3)
  const numRegistrations = Math.floor(Math.random() * 3) + 1;
  const eventIds = new Set();

  // Уникальные события для регистрации
  while (eventIds.size < numRegistrations) {
    const eventId = Math.floor(Math.random() * numEvents) + 1;
    eventIds.add(eventId);
  }

  function getRandomSource() {
    const sources = ["social", "myself", "friends"];

    // Генерация случайного индекса от 0 до 2
    const randomIndex = Math.floor(Math.random() * sources.length);

    // Возвращаем случайный элемент из массива
    return sources[randomIndex];
  }

  // Для каждого события создаем регистрацию
  eventIds.forEach((eventId) => {
    const regDate = randomRegistrationDate(eventDates[eventId]);
    registrations.push(
      `(${visitorId}, ${eventId}, '${regDate}', '${getRandomSource()}')`
    );
  });
}

// Формируем SQL-запрос для вставки регистраций
const sqlQuery = `
INSERT INTO registrations (visitor_id, event_id, registration_date,source)
VALUES
${registrations.join(",\n")};
`;

db.run(sqlQuery, (err) => {
  if (err) {
    console.error("Error inserting visitors", err.message);
  } else {
    console.log("inserted visitors succesfull");
  }
});

db.serialize(() => {
  insertIn();
});
