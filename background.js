/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Cookies:", message.cookies);
  console.log("Tab:", sender.tab.id);

  chrome.runtime.sendMessage({ cookies: message.cookies });
}); */

/* chrome.cookies.getAll({ secure: true }, function (cookies) {
  // Process cookies here
  console.log(cookies);
}); */

/////////////////////////////////////

// Listen from content script to background script
/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message from content script:", message);

  // Do something with the message
  // For example, you might want to store the cookies or send a response back to the content script
  sendResponse({ received: true });
}); */
