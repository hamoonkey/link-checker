const linkCheck = require('link-check');

function checkLink(url) {
    linkCheck(url, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${result.link} is ${result.status}`);
    });
}

const urls = [
    "http://localhost:5500/sample-site/hasNoBrokenHyperLink.html",
]

for (const url of urls) {
    checkLink(url);
}