browser.pageAction.onClicked.addListener((tab) => {
	navigator.clipboard.writeText(tab.url);
}); 

