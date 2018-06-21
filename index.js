chrome.browserAction.onClicked.addListener(tab => {   
    if (!tab.url.includes("reddit.com")) {
        alert("Reddit is the only compatible site currently.");
        return;
    }

    chrome.tabs.executeScript(tab.id, {
        file: "anonymize.js",
    });
});