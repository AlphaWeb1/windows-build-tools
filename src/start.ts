import chalk from 'chalk';

import { isDryRun } from './constants';
import { download } from './download';
import { setEnvironment } from './environment';
import { install } from './install';
import { InstallationDetails } from './interfaces';
import { log } from './logging';

function main() {
  if (isDryRun) {
    log(chalk.bold.green(`Dry run: Not actually doing anything.`));
  }

  // The dumbest callbacks. All other methods resulted
  // in stacks that we're too deep and errored out on some
  // machines.
  download(function() {
    install(function(variables: InstallationDetails) {
      setEnvironment(variables);
    });
  });
}

main();
