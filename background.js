/* global browser */
async function onMessage(/*data , sender*/) {
    const data = {currentWindow: true, active: true};
    const tabs  = await browser.tabs.query(data);
    return navigator.clipboard.writeText(tabs[0].url);
}

browser.runtime.onMessage.addListener(onMessage);

