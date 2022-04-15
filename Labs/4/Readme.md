# THIS IS MY TECHNICAL README - MY "HOW"
Link: [https://connected-characters-test.herokuapp.com/](url)

This lab is based on a community of characters, each one created by a community member.

Users create characters by inputting a variety of user-defined parameters, such as name, image (via src), and character biography. The user also defines the relationship of their character to other characters - when the characters are displayed and selected, their relationships to others becomes apparent.

This website has 4 pages: `landing.html`, `createcharacter.html`, `viewcharacters.html`, and `display.html`. They are based off of the 4 pages in Lab 3 and have roughly similar roles. However, despite similarities, every page (and `app.py`) has been substantially changed.

`landing.html`
The landing page. Contains 2 buttons which link to 2 other pages, `createcharacter.html` and `viewcharacters.html`, as well as being styled by CSS code. Does not link to `display.html` Functionally, this page is virtually identical to the landing page in Lab 3

 `createcharacter.html`
The character creation page. Contains multiple input fields for a variety of parameters, in 2 categories: biographical information and character relationships. Biographical information, such as a character's name, is unique to the character and independent of other characters. However, relationship information is dependent on what other characters exist. What exactly a character's relationship is to another one is up to the user to decide, but the user can only choose from the list of existing characters (differentiated by ID number, increasing from 1) to make this connection. When submitted, the form info is sent to `app.py`, which uses the defined `Character` class and the `pickle` Python library to create an instance of the `Character` class and save it to an extensionaless file, which stores all characters. If another character already exists, then so does the list in the extensionless `characters_pickled` file, and so this list is simply appended to. If this is the first character (identified by the character count variable being 0), a new list is created with the current character as its first parameter.

`viewcharacters.html`
The character viewing page. Displays all characters in an organized pattern. Characters that have any kind of relationship to other characters are shown as connected by lines, so that the complexity of the social network is apparent. When `viewcharacters.html` is called, a new clickable character button is instantiated for each character in the list, which are then searched through to sort positionally and to identify relationships between characters (after which the connecting lines are drawn) When submitted, the form info is sent to `app.py`, which includes the info about which button was pressed. This is then used to switch to `display.html` with the pressed button index as a parameter, which is then used to display the full info about the selected character

`display.html`
The individual character viewing page. When called, takes the index of which button in `viewcharacters.html` was pressed as a parameter, as well as the list of all characters. Searches through this list for the appropriate character, and instantiates HTML elements as needed to display all biographical information and character relationships for the selected character, as well as their image src (passed as the src component of an <img> tag to be rendered).
