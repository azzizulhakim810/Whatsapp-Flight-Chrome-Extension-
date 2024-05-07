/* const cookies = document.cookie;
chrome.runtime.sendMessage({ cookies: cookies }); */

// In your content script
/* chrome.cookies.getAll({ secure: true }, function (cookies) {
  // Process cookies here
  console.log(cookies);
}); */

// In content script
/* chrome.runtime.sendMessage({ action: "retrieveCookies" });
 */

/////////////////////////////

// Message from Content Script to Background Script
/* chrome.runtime.sendMessage({ greeting: "Hello from content script!" }); */

// Listen from background script to content  script

// 1. Send a message to the service worker requesting the user's data

/* chrome.runtime.sendMessage({ action: "get-user-data" }, (response) => {
  // 3. Got an asynchronous response with the data from the background script
  console.log("Received user data:", response);
  initializeUI(response);
}); */

/* (async function () {
  try {
    const tabs = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    if (tabs && tabs.length > 0) {
      const tab = tabs[0];
      chrome.cookies.getAll({ url: tab.url }, (cookies) => {
        chrome.runtime.sendMessage({ greeting: cookies });
      });
    } else {
      console.error("No active tab found.");
    }
  } catch (error) {
    console.error("Error occurred in content script:", error);
  }
})(); */
