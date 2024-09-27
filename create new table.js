-- Создание таблицы "visitors" (посетители)
CREATE TABLE visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- Уникальный номер
    first_name TEXT NOT NULL,              -- Имя
    last_name TEXT NOT NULL,               -- Фамилия
    email TEXT NOT NULL UNIQUE,            -- Email (уникальный)
    date_of_birth DATE NOT NULL,           -- Дата рождения
    source TEXT CHECK(source IN ('social', 'friends', 'myself')) NOT NULL  -- Источник (социальные сети, друзья, нашел сам)
);

-- Создание таблицы "events" (события)
CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- Уникальный номер события
    title TEXT NOT NULL,                   -- Название события
    description TEXT NOT NULL,             -- Описание
    event_date DATE NOT NULL,              -- Дата события
    organizer TEXT NOT NULL                -- Организатор
);

-- Создание таблицы "registrations" (регистрации посетителей на события)
CREATE TABLE registrations (
    visitor_id INTEGER,                    -- ID посетителя
    event_id INTEGER,                      -- ID события
    registration_date DATE NOT NULL,       -- Дата регистрации
    PRIMARY KEY (visitor_id, event_id),    -- Композитный первичный ключ (уникальность по сочетанию visitor_id и event_id)
    FOREIGN KEY (visitor_id) REFERENCES visitors(id),   -- Связь с таблицей visitors
    FOREIGN KEY (event_id) REFERENCES events(id)        -- Связь с таблицей events
);

-- Вставка случайных данных в таблицу "visitors"
INSERT INTO visitors (first_name, last_name, email, date_of_birth, source)
VALUES
('John', 'Doe', 'john.doe@example.com', '1990-05-15', 'social'),
('Jane', 'Smith', 'jane.smith@example.com', '1985-08-22', 'friends'),
('Alex', 'Johnson', 'alex.johnson@example.com', '1992-11-03', 'myself'),
('Emily', 'Davis', 'emily.davis@example.com', '1998-01-19', 'social'),
('Chris', 'Brown', 'chris.brown@example.com', '1995-07-30', 'friends');

-- Вставка данных в таблицу "events"
INSERT INTO events (title, description, event_date, organizer)
VALUES
('Tech Conference 2024', 'A conference on the latest trends in technology and innovation.', '2024-11-15', 'Tech Innovators'),
('Art & Culture Festival', 'Celebrating local and international art and culture.', '2024-10-12', 'City Art Council'),
('Health and Wellness Expo', 'Promoting healthy living and wellness products.', '2024-09-30', 'Wellness Inc.');

-- Вставка данных в таблицу "registrations"
INSERT INTO registrations (visitor_id, event_id, registration_date)
VALUES
(1, 1, '2024-09-01'),
(2, 2, '2024-09-01'),
(3, 3, '2024-09-02'),
(1, 2, '2024-09-02'),
(4, 1, '2024-09-03'),
(5, 3, '2024-09-03');

-- Пример запроса для подсчета количества регистраций по датам
SELECT registration_date, COUNT(*) AS total_registrations
FROM registrations
GROUP BY registration_date;




-- Вставка 100 посетителей с уникальными именами и случайными источниками
INSERT INTO visitors (first_name, last_name, email, date_of_birth, source)
VALUES
('John', 'Doe', 'john.doe@example.com', '1990-05-15', 'social'),
('Jane', 'Smith', 'jane.smith@example.com', '1985-08-22', 'friends'),
('Alex', 'Johnson', 'alex.johnson@example.com', '1992-11-03', 'myself'),
('Emily', 'Davis', 'emily.davis@example.com', '1998-01-19', 'social'),
('Chris', 'Brown', 'chris.brown@example.com', '1995-07-30', 'friends'),
('Michael', 'Taylor', 'michael.taylor@example.com', '1991-06-12', 'social'),
('Sarah', 'Wilson', 'sarah.wilson@example.com', '1987-03-25', 'myself'),
('David', 'Moore', 'david.moore@example.com', '1989-09-11', 'friends'),
('Laura', 'Clark', 'laura.clark@example.com', '1993-07-19', 'social'),
('Daniel', 'Walker', 'daniel.walker@example.com', '1994-04-22', 'myself'),
('Sophia', 'Hall', 'sophia.hall@example.com', '1986-11-13', 'friends'),
('James', 'White', 'james.white@example.com', '1992-02-08', 'social'),
('Olivia', 'Martinez', 'olivia.martinez@example.com', '1991-08-03', 'friends'),
('Lucas', 'Anderson', 'lucas.anderson@example.com', '1995-10-14', 'myself'),
('Mia', 'Thomas', 'mia.thomas@example.com', '1994-12-28', 'social'),
('Noah', 'Jackson', 'noah.jackson@example.com', '1988-05-23', 'friends'),
('Ava', 'Lopez', 'ava.lopez@example.com', '1990-09-17', 'myself'),
('Liam', 'Gonzalez', 'liam.gonzalez@example.com', '1993-01-06', 'social'),
('Isabella', 'Harris', 'isabella.harris@example.com', '1995-03-30', 'friends'),
('Ethan', 'Young', 'ethan.young@example.com', '1989-12-09', 'social'),
-- добавляем еще 80 посетителей
('Charlotte', 'Turner', 'charlotte.turner@example.com', '1997-02-18', 'myself'),
('Benjamin', 'Scott', 'benjamin.scott@example.com', '1992-11-20', 'social'),
('Amelia', 'Green', 'amelia.green@example.com', '1986-10-05', 'friends'),
('Henry', 'Baker', 'henry.baker@example.com', '1988-04-27', 'myself'),
('Ella', 'King', 'ella.king@example.com', '1996-06-02', 'social'),
('Sebastian', 'Adams', 'sebastian.adams@example.com', '1993-07-08', 'friends'),
('Grace', 'Campbell', 'grace.campbell@example.com', '1995-09-11', 'social'),
('Jack', 'Rivera', 'jack.rivera@example.com', '1991-01-23', 'friends'),
('Zoe', 'Wright', 'zoe.wright@example.com', '1987-12-31', 'myself'),
('Emma', 'Patterson', 'emma.patterson@example.com', '1994-05-10', 'social');


-- Вставка 25 событий с уникальными датами и организаторами
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
('Culinary Arts Festival', 'A celebration of culinary excellence and innovation.', '2024-09-10', 'Chef’s Guild'),
('Entrepreneurship Forum', 'Discussions on business growth and entrepreneurship.', '2024-11-09', 'Business Leaders Network'),
('Fashion & Lifestyle Expo', 'Showcasing the latest trends in fashion and lifestyle.', '2024-12-03', 'Style Network'),
('Environmental Awareness Day', 'A day dedicated to raising awareness about environmental issues.', '2024-09-07', 'Green Earth'),
('Music Industry Conference', 'Insights into the latest trends in the music industry.', '2024-10-15', 'Music Business Association'),
('Tech Innovators Forum', 'Discussions on the future of technology.', '2024-09-21', 'Tech Forum Group'),
('Local Farmer’s Market', 'Support local farmers by visiting the market.', '2024-09-18', 'Farmers Alliance'),
('Blockchain Summit', 'Exploring the future of blockchain technology and its applications.', '2024-12-07', 'Blockchain Innovators');
