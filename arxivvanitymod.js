var div_dl = document.getElementsByClassName("full-text")[0];
var c = div_dl.childNodes;
for (var i = 0; i < c.length; i++) {
    if(c[i].nodeName == "UL") {
        var node = document.createElement("LI");
        var link = document.createElement("A");
        var t = document.createTextNode("Web on arXiv Vanity");

        var match = window.location.href.match(/(\d+\.\d+v?\d)/i)
        if (!match) {
            break;
        }
        var arxivID = match[0];

        var av_url = "https://www.arxiv-vanity.com/papers/" + arxivID + "/";
        link.setAttribute("href", av_url);
        link.appendChild(t);
        node.appendChild(link);
        c[i].insertBefore(node, c[i].childNodes[2]);
        break;
    }
}
