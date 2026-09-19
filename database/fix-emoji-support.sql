-- Fix Emoji Support for Existing Database
-- Run this if you already have the database created

USE walters_safari;

-- Convert database to utf8mb4
ALTER DATABASE walters_safari CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Convert existing tables to utf8mb4
ALTER TABLE users CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE packages CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE destinations CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE bookings CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE testimonials CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE blog_posts CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE seo_meta CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE gamification_rewards CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Now you can insert the emoji data
INSERT INTO destinations (name, slug, description, icon) VALUES
('Serengeti', 'serengeti', 'Great Migration & Big Five', '🦁'),
('Ngorongoro', 'ngorongoro', 'Crater Paradise', '🌋'),
('Tarangire', 'tarangire', 'Elephant Haven', '🐘'),
('Lake Manyara', 'lake-manyara', 'Flamingo Paradise', '🦩'),
('Kilimanjaro', 'kilimanjaro', 'Africa\'s Highest Peak', '⛰️')
ON DUPLICATE KEY UPDATE 
    description = VALUES(description),
    icon = VALUES(icon);
