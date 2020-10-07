#!/usr/bin/env node
// The above command is responsible to run this pacakge globally from evey where.
// We had installed a npm package named as "link", it basically helps us to run this package from anywhere in this computer

const program = require("commander");
const pkg = require("../package.json");

// This command is responsible for getting version details by passing --version after cyrptodesk
// This command will also give one more thing other that version details and that is help, just enter -h after cryptodesk
program
  .version(pkg.version)
  .command('key', 'Manage API key -- https://nomics.com')
  .command('check', 'Check Coin Price Info')
  .parse(process.argv);



// Have a look on a command "process.argv".