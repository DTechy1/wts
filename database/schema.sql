-- Database Schema for Walters Tours & Safaris

CREATE DATABASE IF NOT EXISTS walters_safari CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE walters_safari;

-- Users Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'staff', 'customer') DEFAULT 'customer',
    points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Packages Table
CREATE TABLE packages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    duration VARCHAR(50),
    price DECIMAL(10,2),
    featured BOOLEAN DEFAULT 0,
    image VARCHAR(255),
    category ENUM('luxury', 'budget', 'day_trip', 'custom') DEFAULT 'luxury',
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Destinations Table
CREATE TABLE destinations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    image VARCHAR(255),
    icon VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bookings Table
CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    package_id INT,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    travel_date DATE NOT NULL,
    guests INT DEFAULT 1,
    total_price DECIMAL(10,2),
    special_requests TEXT,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (package_id) REFERENCES packages(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Testimonials Table
CREATE TABLE testimonials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(100),
    content TEXT NOT NULL,
    rating INT DEFAULT 5,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    video_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Blog Posts Table
CREATE TABLE blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    featured_image VARCHAR(255),
    author_id INT,
    status ENUM('draft', 'published') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- SEO Meta Table
CREATE TABLE seo_meta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255),
    description TEXT,
    keywords TEXT,
    og_image VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Gamification Table
CREATE TABLE gamification_rewards (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    action VARCHAR(100),
    points INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert Sample Data
INSERT INTO destinations (name, slug, description, icon) VALUES
('Serengeti', 'serengeti', 'Great Migration & Big Five', '🦁'),
('Ngorongoro', 'ngorongoro', 'Crater Paradise', '🌋'),
('Tarangire', 'tarangire', 'Elephant Haven', '🐘'),
('Lake Manyara', 'lake-manyara', 'Flamingo Paradise', '🦩'),
('Kilimanjaro', 'kilimanjaro', 'Africa\'s Highest Peak', '⛰️');

INSERT INTO packages (name, slug, description, duration, price, featured, category, image) VALUES
('Serengeti Explorer', 'serengeti-explorer', 'Witness the great migration', '5 Days', 2500.00, 1, 'luxury', '/images/walters-tours-safaris-magdalena-kula-manchee-nVUZO1gc_-o-unsplash.jpg'),
('Ngorongoro Crater Adventure', 'ngorongoro-crater', 'Explore the crater paradise', '3 Days', 1800.00, 1, 'luxury', '/images/walters-tours-safaris-hu-chen-t-7Mlatf9iI-unsplash.jpg'),
('Kilimanjaro Trek', 'kilimanjaro-trek', 'Conquer Africa\'s highest peak', '7 Days', 3200.00, 1, 'luxury', '/images/walters-tours-safaris-humphrey-m-e5hzQubIb68-unsplash.jpg');
