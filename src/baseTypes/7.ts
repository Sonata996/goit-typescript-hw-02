/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Day = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}

const weekendDay = {
  saturday: "Saturday",
  sunday: "Sunday"
}


function isWeekend(day: DayWeek): boolean {
  if (DayWeek.Day === weekendDay.saturday || weekendDay.sunday) {
    console.log(true);
    return true
  } else {
    return false
  }
  
}

isWeekend(DayWeek.Day)