const linkCheck = require('link-check');

linkCheck('https://www.npmjs.com/package/link-check', function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`${result.link} is ${result.status}`);
});