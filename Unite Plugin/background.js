// this is the background code...
// this file is not used..
// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.insertCSS(tab.ib, {
		file: 'unite.css'
	});
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});