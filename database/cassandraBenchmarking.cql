--selection
SELECT * FROM newtable WHERE locationid = 8000000

--insertion
INSERT INTO newtable (locationid, reviewid, message, numfriends, numphotos, numreviews, photoloc, posted, stars, userid, userloc, username) VALUES (9000000, 31999700, 'this is my review', 100, 1000, 100, 'url.com/me', '11-11-2011', 3, 1234, 'los angeles, ca', 'kd'); 

--update
UPDATE newtable SET message = 'my updated message! my updated message! my updated message! my updated message! my updated message!' WHERE reviewid = 

--delete 
DELETE FROM newtable WHERE locationid = 9000000 AND reviewid = 319997000;