
//const temporary = browser.runtime.id.endsWith('@temporary-addon'); // debugging?
const manifest = browser.runtime.getManifest();
const extname = manifest.name;

browser.pageAction.onClicked.addListener((tab) => {
	navigator.clipboard.writeText(tab.url);

	browser.notifications.create(extname, {
		"type": "basic",
		"iconUrl": browser.runtime.getURL("icon.png"),
		"title": extname,
		"message":  'copied url to clipboard' 
	});
}); 

