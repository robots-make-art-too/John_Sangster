let color = '#000000';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});
