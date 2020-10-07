const program = require('commander');
const check = require('../commands/check');

program
  .command('price')         // We can add more commands just like this, and by that it will have more functionality
  .description('Check price of coins')
  .option('--coin <type>', 'Add specific coin in CSV format', 'BTC,ETH,XRP')
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action((cmd) => check.price(cmd));

program.parse(process.argv);