console.log("Welcome To EmpWage program");
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 20;
//UC3 using functions to get empHrs
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
 //UC6 storing Daily Wage in array and retrive the empwage
 function CalculateWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs =getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArray.push(CalculateWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,CalculateWage(empHrs));

}
let empWage = CalculateWage(totalEmpHrs);
console.log("UC6-Total Working Days:"+totalWorkingDays+" TotalHours:"+totalEmpHrs+" EmpWage:"+empWage);
//UC8-storingDailyWage in Map
console.log(empDailyWageMap);

//UC7 Array healperFunction cal total wage using Array foreach traversal or reduce method 
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC-7A-- Total days: " + totalWorkingDays +
    " Total hrs: " + totalEmpHrs + " emp wage: " + totEmpWage); 
    // For calculating total wage
function totalWages(totalWage, dailywage) {
    return totalWage + dailywage;
}
console.log("UC-7A--Emp wage with reduce: " + empDailyWageArray.reduce(totalWages, 0));      
//UC 7B show the day along with daily wage using Array map healper function  
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr ++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("UC_7B - daily wage map ");
console.log(mapDayWithWageArr);

//UC-7C- show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC-7c - daily wage filter when full time wage earned");
console.log(fullDayWageArr);

//UC 7D - find the first occurrence when full time wage was earned using find founction
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Uc-7D - first time Fulltime wage was earned on day: " + mapDayWithWageArr.find(findFullTimeWage));

//UC 7E - check if every element of full time wage is truly holding full time wage
function isAllFulltimewage(dailywage){
    return dailywage.includes("160");
}
console.log("Uc_7E - check All elements have full time wage: " +
                fullDayWageArr.every(isAllFulltimewage));

 //UC_7F -check if there is any partTime wage
 function isAnyparttimeWage(dailyWage){
     return dailyWage.includes("80");
 }               
 console.log("UC_7F - check if any part time wage : " +
        mapDayWithWageArr.some(isAnyparttimeWage));

// UC 7G -Find The number of days the employee worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("Uc 7G - Number of Days Emp worked : " +
        empDailyWageArray.reduce(totalDaysWorked,0));

 //UC9 Arrow Functions
 const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let totalHours=Array.from(empDailyHrsMap.values())
                .filter(dailyHours=>dailyHours>0)
                .reduce(findTotal,0);
let toatlSalary=empDailyWageArray.filter(dailyWage=>dailyWage>0)
                .reduce(findTotal,0);
console.log("UC9A --emp wage with arrow:" + " Total hours:" + totalHours+ " Total Wages:" + toatlSalary);           
//UC 9.b Show the full working days, part working days, no working days
let nonWorkingDays = new Array();
let parttimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: " + fullTimeWorkingDays);
console.log("Part time working days: " + parttimeWorkingDays);
console.log("Non working days: " + nonWorkingDays);    