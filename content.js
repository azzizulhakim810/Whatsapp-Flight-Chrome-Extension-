const cookies = document.cookie;
chrome.runtime.sendMessage({ cookies: cookies });

// In your content script
/* chrome.cookies.getAll({ secure: true }, function (cookies) {
  // Process cookies here
  console.log(cookies);
}); */

// In content script
/* chrome.runtime.sendMessage({ action: "retrieveCookies" });
 */
