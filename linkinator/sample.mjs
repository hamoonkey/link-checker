import { LinkChecker } from "linkinator";

const BASE_URL = "https://www.seancdavis.com/";

const checker = new LinkChecker();

// Log the link object for each link, after it is checked.
checker.on("link", (link) => {
    console.log(link);
  });

await checker.check({ path: BASE_URL, recurse: true });