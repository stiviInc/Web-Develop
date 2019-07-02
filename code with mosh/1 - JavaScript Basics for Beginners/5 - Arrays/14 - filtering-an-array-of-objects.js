/*
    Create a constructor function for make Restaurant objects with the following properties:
    1.- name
    2.- avg cost per person
    3.- speciality
    4.- openHours       -> hours when the restaurant open       24 hours format
    5.- closedHours     -> hours when the restaurant closes     24 hours format
    5.- home service    -> either true or false

    Then create an array of Restaurants, and the last task is to make a function that receibes 2 parameters:
        1- The Restaurant's array
        2.- The exactly hour when the function is invoke

    This function should return all restaurants that are open at that exactly time!
*/

function Restaurant(
  name,
  avgCostPerPerson,
  speciality,
  openHour,
  closedHour,
  homeService
) {
  this.name = name;
  this.avgCostPerPerson = avgCostPerPerson;
  this.speciality = speciality;
  this.openHour = openHour;
  this.closedHour = closedHour;
  this.homeService = homeService;
}

const ListOfRestaurants = [
  new Restaurant("Taco Bell", 5, "Tacos Mexicanos", "8:00", "22:30", false),
  new Restaurant("McDonalds", 6, "Hamburguers", "6:00", "23:30", true),
  new Restaurant("La Crudelia", 15, "Alitas", "20:00", "4:00", false),
  new Restaurant(
    "Los Candiles",
    10,
    "Antojitos Mexicanos",
    "10:00",
    "19:00",
    true
  )
];

//console.log(ListOfRestaurants);

function getExactlyTime() {
  let time = new Date();
  return `${time.getHours()}:${time.getMinutes()}`;
}

function findOpenRestaurantsAtThisTime(restaurants, actualTime) {
  actualTime = actualTime.split(":");

  return restaurants.filter(restaurant => {
    let { openHour: timeOpening, closedHour: timeClosing } = restaurant;
    timeOpening = timeOpening.split(":");
    timeClosing = timeClosing.split(":");

    return (
      parseInt(actualTime[0]) >= parseInt(timeOpening[0]) &&
      parseInt(actualTime[1]) >= parseInt(timeOpening[1]) &&
      parseInt(actualTime[0]) <= parseInt(timeClosing[0]) &&
      parseInt(actualTime[1]) <= parseInt(timeClosing[1])
    );

  });
}

let openRestaurants = findOpenRestaurantsAtThisTime(ListOfRestaurants, getExactlyTime());

console.log(openRestaurants);