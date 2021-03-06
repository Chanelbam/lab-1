const { getDayOfTheWeek, makeCalender } = require("./lab-three.js");
const readlineSync = require("readline-sync");

function getDayOfTheWeekForUserDate (){
    var userDate = readlineSync.question("Please enter the the date with format of yyyy-mm-dd. ");
    const data = userDate.split("-");
    console.log(data);
    const year = Number(data[0]);
    const month = Number(data[1]);
    const date = Number(data[2]);
    if ( year && month && date ){
        const day_in_the_week = getDayOfTheWeek(year, month, date);
        const date_msg = `${userDate} is ${day_in_the_week}`;
        console.log(date_msg);
    } else {
        console.log("The format of your input is wrong");
    }
};

makeCalender();

getDayOfTheWeekForUserDate();