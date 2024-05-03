chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Cookies:", message.cookies);
  console.log("Tab:", sender.tab.id);

  chrome.runtime.sendMessage({ cookies: message.cookies });
});
