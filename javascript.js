var moment = require('moment');
const chalk = require('chalk');


let now = moment().format();
console.log(chalk.cyan('Today is ',moment().toString()));

let hour = moment(now).format('hh');

console.log ('Current Time:', moment(now).format('hh'));

if (hour>0 && hour <12)
    {
        console.log(chalk.yellow.underline('Good Morning'));
    }
else if ( hour >=12 && hour <5)
    {
        console.log(chalk.orange.underline('Good Afternoon'));
    }
else
{
    console.log(chalk.blue.underline('Good Evening'));
}
