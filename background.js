chrome.browserAction.onClicked.addListener(function(tab) {
    // extract url and return if doesn't match
    if(!tab.url.startsWith('https://arxiv.org/') ) {
        return;
    }

    // get arxiv id
    var match = tab.url.match(/(\d+\.\d+v?\d)/i);
    if (!match) {
        return;
    }

    // navigate to vanity
    chrome.tabs.create({ 
        url: "https://www.arxiv-vanity.com/papers/" + match[0] + "/",
        index: tab.index + 1,
        active: true,
    });
});
