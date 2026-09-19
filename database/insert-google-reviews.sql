-- Insert Real Google Business Reviews
-- Run this file to add authentic customer testimonials to the database

USE walters_safari;

-- Clear existing testimonials (optional - remove if you want to keep existing ones)
-- TRUNCATE TABLE testimonials;

-- Insert Google Reviews
INSERT INTO testimonials (name, country, content, rating, status, created_at) VALUES
('Sarah Mueller', 'Unknown', 'We just returned home after a 10 day Safari and cultures at Maasai with Walters Tours & Safaris Ltd. This company is fabulous! Very responsive, very much attention to detail. Our guide Bernard is a very skilled tracker and animal spotter.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 2 WEEK)),

('Jodie Holmes', 'Australia', 'We had an amazing 3 night 4 day safari with Walter''s in the Serengeti and Ngorongoro Crater plus a Maasai Village Visit. We saw so many animals and the accommodations were fantastic! Being from Australia it was difficult to find a safari company, but Walter''s made everything easy.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 8 MONTH)),

('Ana Gmajnić', 'Unknown', 'The safari with Walter''s Tours and Safaris was absolutely amazing! Our guide was excellent, very knowledgeable, friendly, and made the whole experience unforgettable. He drove us everywhere and made sure we saw all the animals! The lunch in the middle of nature was the perfect touch. Highly recommended!', 5, 'approved', DATE_SUB(NOW(), INTERVAL 9 MONTH)),

('Jacek Boksa', 'Unknown', 'A wonderful trip. The guide was very helpful and provided a lot of interesting information, and the driver was a master of the wheel. I highly recommend it.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 3 WEEK)),

('Aneth Sylvester', 'Unknown', 'Jambo! Thank you for the amazing safari of my honeymoon trip from Zanzibar to safari! Shout out to the best guide Goodluck and Walter for his best communication from the office to answer our questions! During our research we found many tour companies but Walter''s stood out.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 4 MONTH)),

('Raisa Ritfeld', 'Unknown', 'I had a wonderful experience with Walter''s. They offered the best price for my Ngorongoro and Serengeti Safari. The food was excellent, the camping was clean. Would definitely book again with them!', 5, 'approved', DATE_SUB(NOW(), INTERVAL 9 MONTH)),

('Sabrina Borraccino', 'Unknown', 'My experience with Walter''s tour and safaris was wonderful. My safari in the Serengeti park was absolutely better than I have ever imagined. I could see many animals and understand their behavior with the perfect explanations of the driver.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 10 MONTH)),

('Njau Christina', 'Unknown', 'Best guide from Walters Tours & Safaris! Me and my fiancé we booked a 5 days trip: Lake Manyara, Serengeti and Ngorongoro and Walter''s team made it happen with excellent service and affordable prices. Thank you all, highly recommend this company!', 5, 'approved', DATE_SUB(NOW(), INTERVAL 11 MONTH)),

('Nic Lowe', 'Unknown', 'These guys are amazing! We used the team to take us to Mikumi Safari, Nakupenda Sandbank, Stone Town, Ntente and Mnemba to see the dolphins and each trip was special in its own way. We were guided by Abdul on most excursions and he was excellent.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 4 DAY)),

('Yolanda Finch', 'Unknown', 'Me and my partner had an amazing week in Tanzania''s parks and extremely happy with our safari. We saw the "Big Five" at Serengeti and Ngorongoro on top of many many other wild animals, not to mention the outstanding landscapes and accommodations.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 3 MONTH)),

('Vincenzo Calabrese', 'Italy', 'We took a day safari from Zanzibar to Mikumi National Park in Tanzania. It was a wonderful experience; our guide was really good, spoke Italian, and explained lots of interesting facts to us.', 5, 'approved', DATE_SUB(NOW(), INTERVAL 1 WEEK));

-- Verify the inserted data
SELECT COUNT(*) as total_reviews FROM testimonials WHERE status = 'approved';
SELECT name, LEFT(content, 50) as preview, rating, created_at FROM testimonials ORDER BY created_at DESC;
