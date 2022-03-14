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