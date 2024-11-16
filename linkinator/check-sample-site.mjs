import { LinkChecker } from "linkinator";
import chalk from 'chalk';

const BASE_URL = "http://localhost:5500/sample-site/";

const checker = new LinkChecker();

// Log the link object for each link, after it is checked.
checker.on("link", (link) => {
  if (link.state === 'OK') {
    console.log(`
      url: ${link.url}
      state: ${link.state}
      parent: ${link.parent}
    `);
  } else if (link.state === 'BROKEN') {
    console.log(chalk.red(`
      url: ${link.url}
      state: ${link.state}
      parent: ${link.parent}
    `));
  } else {
    console.log(chalk.yellow(`
      url: ${link.url}
      state: ${link.state}
      parent: ${link.parent}
    `));
  }
});

await checker.check({ path: BASE_URL, recurse: true });