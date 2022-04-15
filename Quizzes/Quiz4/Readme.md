# Quiz 4 - we came; we built; we interacted

This is the last `quiz`... you've made it through:

- Quiz 1: `setup and soundbeats`
	- do you remember your first template clone into robots?
  - what about your reaction to `how do I make an emotion with code`? 
  - or changing `just one thing`?

- Quiz 2: `classy robot family`
	- do you know where your `classy` children are?
	- what about their parents? 
	- do you remember how similar `OOP` is when we looked at `processing.py` vs `p5.js`?

- Quiz 3: `message in a bottle`
  - you are no longer limited to `one file - one location`!
  - smile! There will be a surprize sent to your `GPS` next week!
  - interacting digitally across space and time (in just a few lines..)

---

## Let's look back

Our notes from last class (_THE_ [`last class`](last-class.md)) might be helpful to reference while answering the `Quiz 4` questions.

Here we go! Just answer in this `readme.md` file - you can even do it online, remember? (grab a copy of the repo first though!). 

>
> You do not need to write long answers. In fact, keep them short, keep them clear. 
>
> Point-form, jot-notes, paraphrasing, snippets, links.
>

---

### Week 01

1. setup
   - What is a repo and why do we use them?
	   - A repo is an online storage space (for example on Github) that files are stored on
	   - They are used to monitor different instances and branches of a project as well as to share the files with others
2. version control
   - Why do we use version control? How did you manage making use of this? Be specific.
		- Version control is an important part of working on a project. It both allows people to work on and share different versions of a project (for example, games often have a version for developers to work on and a version for the public), and for creators to roll back to an earlier version in case something goes wrong
   		- I used this in my Lab 3 - I would often try something in a test version before rolling back to an earlier one, and would also roll back in case something went wrong. For example, I had a working build to have different files communicate with the app.py, which broke when I tested something new (until I rolled it back)
3. processing
   - Why is processing similar across _at least_ three languages (Java, Python, JavaScript)? What might be the point of this?
   		- Processing uses the same library of functions, classes, and custom data types across these languages. This is probably done to ensure that anyone who is familiar with it in one language can still use it in the other languages, without much difficulty. 

---

### Week 02

1. IDEs
   - What IDEs did you use over the last 3.5 months?
   		- Visual Studio Code
   		- Visual Studio
   		- Processing
2. UI & UI Elements
   - Give me a specific example of where you considered UI in any of your course content submissions?
   		- In Lab 3, the player views different clickable "markers" (indicators) on a map. I wanted to make sure that the map was readable, that the markers were in the right position, and that they were clear to see and click on. For these reasons, the UI of the map section of the project was very important to me in this lab
3. JSON
   - What _exactly_ is JSON? Decide how you want to answer this.
   		- JSON is both a tool and a file format. It allows data to be stored in a way independent of languages, so that information can be transferred between different scripts (which may use different languages) without difficulty. It also stores the data in a way that humans are able to read, making files and programs using JSON often simple to debug and analyze.
4. CLI & GUI
   - Give me at least 3 ways we used GitHub and explain the difference between local and remote copies of a repo.
   		- To work on group projects
   		- To manage different versions of individual projects (in the `robots` group) in personal repos
   		- To share information (eg. teacher to student)
   		- To be a source of files for Heroku sites
   		- The difference between a local and remote copy of a repo is that a local copy is unique to the user's computer, while a remote copy is visible by everyone. For example, if I clone this repo and make changes to this readme, but don't push them, those changes apply only to my local repo and not to the (universally visible) remote repo.
5. debug
   - What magical number-letter combo helps us debug in the browser? (What is a cross-origin error?) How can I display console content?

---

### Week 03

1. Browsers, extensions
   - Interaction with the browser through extensions required at least 2 things. Tell me what you think they are. There is a correct answer, and I talked about it in a January video.
   		- A way for the user to activate and deactivate the extension
   		- The ability to read and modify the content of an HTML file
2. DOM, selectors, elements
   - How are these related? 
   		- DOM is a cross-language method for organizing information in a piece of code so that it can be properly accessed
   		- A selector is a part of a (usually CSS) script that accesses and modifies all elements of a specific type (typically by type or class name)
   		- An element is a unique part of a piece of code, which typically stores some piece of information (eg. an instance of the string "string")
   		- These are related in that a selector utilizes the DOM framework to access all elements in a given program, in order to modify them a certain way
3. JavaScript OOP
   - Show me 2 specific ways you used an OOP style in your course content submissions. Where did I use OOP in my p5.js updates?
   		- In Test 2, each `robot` is a unique instance of a robot class, with certain elements including name, marital status, shape, and parent(s)
   		- In Lab 4, each `character` is a unique instance of the `Character` class, with certain elements including name, biography, and ID

---

### Week 04

1. Python
   - Show me where you completed the `try these` instructions from [Feb 3](https://github.com/robots-make-art-too/EECS_1720/tree/main/General-Content/Content_by_Week/Week04/Week04-live_code)
2. Describe and list common attributes of any object-oriented programming language.
	- An object-oriented programming (OOP) language uses virtual "objects" to carry out and store functions and to store data. Any OOP language must support the definition, instantiation, and construction of classes, as well as the ability to access these class instances (or classes themselves if they are `static`) from other files in the program. Examples of object-oriented languages include Java, Javascript, C++ and C# (but not C itself), and Python (though these languages have varying levels of OOP functionality and are not intended to equally support them, they all allow OOP)

---

### Week 05

1. Python OOP
   - Write a python class for a `classy robot` that has the following: a name, an age, and can start and stop dancing when you clap. You can do it in under 10 lines (it can be pseudo-code like).

```
class classy_robot():
	def __init__(self, name, age):
		self.name = name
		self.age = age
		self.dancing = false
	def startDancing():
		self.dancing = true
	def stopDancing():
		self.dancing = false
```

2. APIs
   - What API did you connect with in Lab 2? Briefly explain how you integrated interactivity within your code. 
   		- Autocode, an API partially designed for building bots.
   		- Interactivity was a feature of the project as the user could use the `/emoji` command to cause the bot to act (posting a random emoji)

---

### Week 06

1. server-client
   - Give me an example of an interaction done `client-side` and an interaction done `server-side`.
   		- A `client-side` interaction might be writing input (such as a username and password) into a web page. These happen on the user's computer, but don't change the server as a whole
   		- A `server-side` interaction might be the submission of these inputs into the web page. At this point, the code which determines if the user's username and password are correct (or which does any other type of interaction based on input, such as searching) is not on the user's computer, but on a server
2. local hosting
   - what is the difference between dragging an index.html file into your browser and opening an index.html file using localhost? Do you remember the number equivalent to localhost?
   	- The number for localhost is 127.0.0.1
   	- When dragging an html file to the browser, it is run as only an html file - it can still display information and can be interacted with, but is unable to send or receive information from other files. To do this, it must be hosted on a server such as localhost 

---

### Week 07

1. GitHub pages
   - What is a `deployment` in this context? What is a branch and why are they used for contributing to repos? 
   		- Deploying here has a similar meaning to pushing a local version of a repo to a remote version - it represents "pushing" the remote repo to the page itself, and to enable its functionality as a web page
   		- Branches are a unique copy of a repo which exists "beside" it, ie. not a previous version or a more advanced version. Changes can be made to a branch without changing the main repo, which makes them useful for collaborative and group projects
2. Augmented Reality
   - What makes AR possible? What is needed in a code context?
   		- AR is possible because of a computer's ability to identify features around it (such as identifying a QR code or imge indicator, but also non camera-based features such as GPS coordinates), and to communicate with a server to react a certain way (such as displaying an image or 3D model) based on what those features are

---

### Week 08

1. aesthetics
   - Give me a specific example of where you considered aesthetic design in any of your course content?
2. APIs for extending integration
   - Identify where in _your_ code, for Quiz 1, Quiz 2, Quiz 3, Lab 1, Lab 2, Lab 3 that either you used an API or where you _could_ integrate an API (it could be that we added API access in the lecture example and you used the same - still identify this).
   	- The most prominent example of me using an API is with Lab 2, where I used the Autocode API to support a Discord bot

---

### Week 09

1. OOP elements & interactive JavaScript
   - How did we interact with webpage elements using code?
   	- Using JavaScript, we can add, remove, and change the content of almost any HTML element (for example, I did this in Lab 3 by using JS to add clickable image-buttons to a map image). These elements can also be made interactable by the user, such as allowing them to click buttons or input text
2. integrating multi-code & external content
   - What kind of event-based interactions are possible in web-based applications? 
   	- The possibilites are very broad, but some of the most widespread examples include changing between web pages, changing the content of a page  (ie. having it react a certain way when an event is called), and triggering an event that won't have an effect until the page is changed

---

### Week 10

1. Levels of location - local to geo
   - How did we instantiate multiple geo-locations and dynamic object loading in our AR code?
   		- Using `geo-camera` and simulating latitude and longitude, we could simulate the camera's position and load an object via an already existing AR library
2. app hosting
   - What is important about constructing an app? How does this relate to its `environment`?
   		- When constructing an app, one important thing to consider is where it will be hosted and supported. This influences what platforms the app might be supported on, how much it might cost to support, the app's size, and what functionality might be supported (including already existing functionality) or prohibited.

---

### Week 11

1. interaction along the virtuality-reality continuum
   - Why are `id`'s important for interaction?
   		- `id`s are important because they allow a program (for example using `Flask`) to identify specific HTML elements across files and languages
   		- For example, I used `id`s in Lab 3 to determine which button the user had clicked, causing a certain message associated with that button to be displayed
2. Tell me about 2 WEB-APIs and how you could integrate them into any of your course content submissions? Give me a line or two of code.

---

### Week 12

1. tracking
   - Briefly describe how the complexity changes between image, facial, and hand, tracking? 
   	- Image tracking has to detect a certain pattern (for example, a QR code) at any orientation (aside from orientations where part or all of the pattern is invisible). This is complex, but only requires a specific collection and arrangement of shapes and vertices to be remembered by the computer
   	- Hand tracking has to detect a pattern of how the human hand is structured, which is different from person to person. The computer must be able to detect a hand in front of it based on less specific values such as number and size of fingers relative to the palm - other factors, such as finger length, can change from person to person. As such a computer has to learn that a wide variety of shapes can be considered "hands", and should be identified by the program
   	- Facial tracking is the most complex, in which the computer has to recognize a large and complex shape in which any or all of the features might be different from any other example. The appearance of people's heads varies not only in a front-facing view, but also from other dimensions including profile, such as with the shape of their nose. In addition, many small changes which may seem insignificant to a program can be very important to humans for purposes such as communicating emotions.
2. OOP, ECS, DOM
   - What are these acronyms? How are they related?
   	- OOP: object-oriented programming
   	- ECS: entity-component system
   	- DOM: document object model
   	- All of these systems are ways of organizing information, which continually use each other to function properly. For example, when a class's method `class.method` is accessed, that uses both OOP (referencing either the `static` class or the non-static `instance` of a class) and DOM (`element.subelement` configuration is a feature of DOM as well)
3. How do you register a component in A-Frame, and show me how to relate this component to data flow, API, and useage. 

---

## That's all!

(did you ever watch the movie trailer embedded somewhere in your Quiz 3 readme.md [files](https://github.com/robots-make-art-too/Quiz_3-message-in-a-bottle)?)

### Do you want a bonus? 

Do one, some, or all, of the following before the end of April:

Publish an A-Frame component.
- <https://www.npmjs.com/package/angle>

Publish your browser extension. 
- [microsoft](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/create-dev-account)
- [chrome](https://developer.chrome.com/docs/extensions/)
- [firefox](https://addons.mozilla.org/en-CA/developers/)

Release a version of your Bot.
- <https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository>


---

Psst: Every 100 days _another_ `100 days of code` starts ... 
