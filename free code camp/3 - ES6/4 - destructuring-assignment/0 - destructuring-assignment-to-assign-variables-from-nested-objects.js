
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

const maxOfTomorrow = (LOCAL_FORECAST) =>{
    "use strict";
    const{tomorrow : {max: maxOfTomorrow}} = LOCAL_FORECAST;
    return maxOfTomorrow;
}

console.log(maxOfTomorrow(LOCAL_FORECAST)); // should be 84.6

