/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Mondey,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


function isWeekend(day: DayWeek): boolean {
 return day === DayWeek.Saturday  || day === DayWeek.Sunday
  
}

isWeekend(DayWeek.Friday)