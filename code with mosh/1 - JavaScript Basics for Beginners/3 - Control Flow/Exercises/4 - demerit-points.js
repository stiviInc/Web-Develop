/*
    Write a function that receive as a value the car's speed, and according the next condition will be the return value:

    - Speed Limit = 70  ---> Down this speed return a message "ok"

    - Each 5 km above the limit, the driver gets 1 point
        Example: 75km gets 1 point, but between 70km and 74km, it still giving the "ok" message....
                 80km gets 2 point, 85km gets 3 points... and so on...

    - if the driver gets 12 points, receibe a message "licence suspended"

    - Recommendation:  Use the Math.floor() function....
*/


let status = (speed) => {
    if(speed <= 74) return 'ok';
    let numPoint = 0;
    let times = getNumPoint(speed,numPoint);
    return times >= 12 ? 'Licence Suspended' : `Point: ${times}`;
}

function getNumPoint(speed,numPoint) {
    while(speed >= 75){
        numPoint++;
        speed -= 5;
        getNumPoint(speed,numPoint);
    }
    return numPoint;
}

console.log(status(75));