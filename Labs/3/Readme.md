# THIS IS MY TECHNICAL README - MY "HOW"
Link: [https://geographic-messages-test.herokuapp.com/](url)

This website is based on positioning messages in space, rather than in time. Messages are organized according to their latitude and longitude, and are placed on a map.

This website has 4 pages: `geo.html`, `makepost.html`, `seeposts.html`, and `display.html`. See the sample code folder to view the entire code of these files

`geo.html`:
The landing page. Contains only 2 buttons which link to 2 other pages (`makepost.html` and `seeposts.html`), as well as some CSS code to style it properly. It does not link directly to `display.html` because that page is intended to be only accessed from `seeposts.html`.

`makepost.html`:
The post-making page. Contains 3 input fields for text (one for the message text, one for latitude, and one for longitude), as well as a button to submit the form. When submitted, the form is passed as a parameter to `app.py` (via calling `app.py/writetomarkers`), which takes the input from the input fields and appends it to the current .txt file (`markers.txt`), which stores all messages. It also creates (via `marker_count.txt`) an index number (of the form MX, where X is the current index), so that the appropriate message can be found in other files.

`seeposts.html`:
The post-viewing page. Displays a background map of a fixed pixel scale (3087 x 1554 px). The map used is an equirectangular projection, unique in that every distance on the map (eg 8.5 px) represents the same distance (in this case, 1 degree) no matter where it is on the map. This is in contrast to some other projections such as the Mercator projection, in which the distance of one degree (as a percentage of the map width/height) changes from point to point. When `seeposts.html` is called, the list of all markers is passed as a parameter. The entire list is indexed, then each message (containing the 4 elements of index number, text, latitude, and longitude) is read and converted to an appropriately-placed marker on the map. This marker is a button, which when clicked calls the next file, `display.html`. 

`display.html`:
The individual post-viewing page. Passes the list of all markers as a parameter, as well as the index of the clicked button (from `seeposts.html`) which is to be displayed. The entire list of markers is indexed (via indexing only the position of | and / characters, indicating the split between different elements in a message or different messages themselves respectively), and the appropriate data (relative to the index parameter) is detected. This data is then passed as the innerHTML of newly created paragraph elements and displayed to the viewer.
