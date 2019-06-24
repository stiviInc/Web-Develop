/*
    Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

    Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

    Sample Input: 07:05:45PM Sample Output: 19:05:45

    Try not to use built in DateTime libraries.

*/

//Expresiones regulares ---> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp

var getMilitaryTime = function(input) {
  var am = input.includes("AM") ? true : false; //If this value's var its true, it means the convertion have to be applied on am rules!, if its false, pm rules have to be applied!
  var splitTime = input.split(/AM|PM|:/); //Expresión regular para que detecte entre diferentes opciones!
  
    /*
        Rules to make the convertion:
        
        if the time is am ---> if the hour is 12, then have to be changed for 00, all the others hours stays equals!...
        if the time is pm ---> if the hour is 12, the hours stays equls, all the others hours have to changed following the next rule:  hour + 12...
    */

  am == true ? splitTime[0] === "12" ? splitTime[0] = "00" : splitTime[0] = splitTime[0] : splitTime[0] == "12" ? splitTime[0] = splitTime[0] : splitTime[0] = (parseInt(splitTime[0]) + 12);

  //add : between hours-minutes-seconds....
  splitTime = splitTime.map(function(digits){
    return digits+=":";
  });

  splitTime = splitTime.slice(0,3);
  splitTime[2] = splitTime[2].replace(/:/,"");

  return splitTime.toString().replace(/,/g,"");
};

console.log(getMilitaryTime("5:35:59PM"));
