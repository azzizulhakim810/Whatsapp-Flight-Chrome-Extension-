/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Cookies:", message.cookies);
  console.log("Tab:", sender.tab.id);

  chrome.runtime.sendMessage({ cookies: message.cookies });
}); */

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "retrieveCookies") {
    chrome.cookies.getAll({ secure: true }, function (cookies) {
      console.log(cookies);
      sendResponse({ cookies: cookies });
    });
    return true; // Keep the message channel open for sendResponse
  }
});
