/* const cookies = document.cookie;
chrome.runtime.sendMessage({ cookies: cookies }); */

chrome.runtime.sendMessage({ action: "retrieveCookies" }, function (response) {
  if (chrome.runtime.lastError) {
    console.error(
      "Error retrieving cookies:",
      chrome.runtime.lastError.message
    );
  } else {
    // Send the cookies to the popup script
    chrome.runtime.sendMessage({ cookies: response.cookies });
  }
});
