import { Button } from 'react-bootstrap';
import $ from 'jquery';

select reviews.id, locations.locname, reviews.stars, reviews.posted, users.name, users.userloc, users.numfriends, users.photoloc, users.numphotos, users.numreviews, from users, reviews, locations where locations.id=1 and reviews.userID = users.id and reviews.locID = locations.id`