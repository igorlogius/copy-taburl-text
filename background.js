
async function onMessage(data, sender) {
    try {
        let tmp  = await browser.tabs.query(data);
        tmp = tmp[0];
        return Promise.resolve(tmp.url);
    }catch(e){
        console.error(e);
    }
    return false;
}

browser.runtime.onMessage.addListener(onMessage);

