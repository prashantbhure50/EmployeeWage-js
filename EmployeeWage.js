const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=2;

//UC1
const IS_ABSENT=0;
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is absent");
}
else
{
    console.log("Employee is present");
}

//UC2
let empHrs=0;
let empCheck=Math.floor(Math.random()* 10 % 3);
switch(empCheck)
{
 case IS_PART_TIME:
      empHrs=PART_TIME_HOURS;
      break;
case IS_FULL_TIME:
      empHrs=FULL_TIME_HOURS;
      break;
default:
      empHrs=0;

}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp wage: "+empWage);

//UC 3 Function
function getWorkingHours(empCheck)
{
  switch(empCheck)
  {
   case IS_PART_TIME:
         return PART_TIME_HOURS;
   case IS_FULL_TIME:
         return FULL_TIME_HOURS;
    default:
          return 0;
  }
}
{
      let empHrs=0;
      let empCheck=Math.floor(Math.random()*10)%3;
      empHrs=getWorkingHours(empCheck);
      let empWage=empHrs*WAGE_PER_HOUR;
      console.log("UC3 - Hour: "+empHrs+" Emp Wage: "+empWage);
}
 
 //UC 4 
 let totalEmpHrs=0;
 for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
 {
   let empCheck=Math.floor(Math.random()*10)%3;
   totalEmpHrs+=getWorkingHours(empCheck);
 }

 let empWage=totalEmpHrs*WAGE_PER_HOUR;
 console.log("Hour: "+totalEmpHrs+" Emp Wage: "+empWage);

// UC 5
{
      const MAX_HRS_IN_MONTH=160;
      const NUM_OF_WORKING_DAYS=20;
      let totalEmpHrs=0;
      
      let totalWorkingDays=0;
      while(totalEmpHrs <= MAX_HRS_IN_MONTH && 
            totalWorkingDays < NUM_OF_WORKING_DAYS)
      {
         totalWorkingDays++;
         let empCheck = Math.floor(Math.random()*10)%3;
         totalEmpHrs+=getWorkingHours(empCheck);
      }
     let empWage = totalEmpHrs*WAGE_PER_HOUR;
     console.log("UC5 - Total Days: "+totalWorkingDays+
     " Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage); 
}

///UC9
const findTotal = (totaVal,dailyVal) => {
      return totalVal + dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => > 0).reduce(findTotal,0);
console.log(totalHours+" "+totalEmpHrs);
let nonWorkingDays= new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrs.Map.forEach(value,key,map) => {
      if(value ==8 ) fullWorkingDays.push(key);
      else if (value == 4) partWorkingDays.push(key);
      else nonWorkingDays.push(key);
});
console.log("fullWroking Days"+ fullWorkingDays);
console.log("Part Working Days"+ partWorkingDays);
console.log("Non Working days"+nonWorkingDays);

