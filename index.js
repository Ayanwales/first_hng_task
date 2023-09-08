const dayOfTheWeek = document.querySelector('#currentDayOfTheweek');
const currentUTC = document.querySelector('#currentUTCTime');

let today= new Date()

//Function To Convert Day Integer to String

//function daysToSrting() {
  //const daysOfWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //return daysOfWeek[today.getDay()]
//}

//console.log(daysToSrting())

const daysToSrting = ()=> {
    const dayOfTheWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayOfTheWeek[today.getDay()]
}
console.log(daysToSrting())
dayOfTheWeek.textContent = daysToSrting()
const now = new Date;
const utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
console.log(utc_timestamp)
      currentUTC.textContent = utc_timestamp