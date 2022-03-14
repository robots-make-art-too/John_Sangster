# THIS IS MY TECHNICAL README - MY "HOW"

The function of this extension is to convert most text on sites to Comic Sans.

Practically, this is achieved by using the base files provided in this lab, which were expanded on using Google's example simple web extension. 

It uses 5 files:
- background.js
- button.css
- manifest.json
- popup.html
- popup.js

The first file, `background.js`, mainly determines the colour of the button. It also communicates this colour to other scripts (especially `popup.js`)
```
let color = '#000000';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});
```

The second file, `button.css`, determines the layout and structure of the button.
```
button {
    height: 30px;
    width: 30px;
    outline: none;
    margin: 10px;
    border: none;
    border-radius: 2px;
}
```

The third file, `manifest.json`, is the extension's manifest and is needed in order for the extension to function. It manages naming, permission, the extension icon (`icon.png`), etc.
```
{
    "name": "Comic Sans",
    "description": "Click to convert to Comic Sans!",
    "version": "1.0",
    "manifest_version": 3,
    "background": {
      "service_worker": "background.js"
    },
    "permissions": ["storage", "activeTab", "scripting"],
    "action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "icon.png"
      }
    }
  }
```

The fourth file, `popup.html`, determines the HTML structure and content of the extension menu (a button). It connects to and accesses the `button.css` and `popup.js` files.
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="button.css">
  </head>
  <body>
    <button id="changeColor"></button>
    <script src="popup.js"></script>
  </body>
</html>
```

The fifth file, `popup.js`, is the most important file as it determines the button's behaviour. It uses the colour from `background.js`, manages click events for the button, and changes the font family of the current site.
```
// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject changeToComicSans into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeToComicSans,
  });
});


function changeToComicSans() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.fontFamily = "cursive";
  });
}
```
