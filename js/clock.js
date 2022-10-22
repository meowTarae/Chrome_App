const clock = document.getElementById("clock");
const calendar = document.getElementById("calendar");
const greetings = document.getElementById("greetings");

const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const greetingsList = ["Morning", "Afternoon", "Evening", "Night"];

let date = new Date();
let greetingsNum = 0;

function getGreetings(greetingsNum) {
  // console.log(greetingsNum);
  greetings.innerText = `Good ${greetingsList[greetingsNum]}, `;
}

function getCalendar() {
  const year = String(date.getFullYear()).slice(2);
  const month = date.getMonth() + 1;
  const todayDate = date.getDate();
  const day = days[date.getDay()];
  calendar.innerText = `${year}. ${month}. ${todayDate}. ${day}. `;
}

function getClock() {
  date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const secs = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${mins}:${secs}`;

  const nowHours = date.getHours();
  if (nowHours >= 6 && nowHours < 12) {
    greetingsNum = 0;
  } else if (nowHours >= 12 && nowHours < 18) {
    greetingsNum = 1;
  } else if (nowHours >= 18 && nowHours < 24) {
    greetingsNum = 2;
  } else {
    greetingsNum = 3;
  }
  getGreetings(greetingsNum);
}

getClock();
getCalendar();
setInterval(getClock, 1000);
