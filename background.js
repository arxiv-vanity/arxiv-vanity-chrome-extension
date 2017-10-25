chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];

        // extract url and return if doesn't match
        url = tab.url;
        if(!url.startsWith('https://arxiv.org/') ) {
            return;
        }

        // get arxiv iv
        re = /(\d+\.\d+v?\d)/i
        found = url.match(re)[0]

        // construct new url
        vanity = "http://www.arxiv-vanity.com/papers/" + found

        // navigate to vanity
        chrome.tabs.create({ 
            url: vanity,
            index: tab.index + 1,
            active: true,
        });
    });
});
