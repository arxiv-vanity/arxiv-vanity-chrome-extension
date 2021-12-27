var div_dl = document.getElementsByClassName("full-text")[0];
var c = div_dl.childNodes;
var i;
for (i = 0; i < c.length; i++) {
    if(c[i].nodeName == "UL") {
        var node = document.createElement("LI");
        var link = document.createElement("A");
        var t = document.createTextNode("Web on arXiv Vanity");
        // get url, extract arxiv id
        url = window.location.href
        re = /(\d+\.\d+v?\d)/i
        found = url.match(re)[0]
        av_url = "https://www.arxiv-vanity.com/papers/" + found
        link.setAttribute("href", av_url);
        link.appendChild(t);
        node.appendChild(link);
        c[i].insertBefore(node, c[i].childNodes[2]);
        break;
    }
}
