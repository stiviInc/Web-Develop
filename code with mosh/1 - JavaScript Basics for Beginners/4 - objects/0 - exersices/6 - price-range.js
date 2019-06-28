/*
    Figure out you have to create a list of range prices...
    Each range price should have a label, a name, a min cost per person and a max cost per person....
*/

function PriceRange(label, name, minPerPerson, maxPerPerson) {
  this.label = label;
  this.name = name;
  this.minPerPerson = minPerPerson;
  this.maxPerPerson = maxPerPerson;
}

let priceRange = [
  new PriceRange("$", "Cheapest", 0, 10),
  new PriceRange("$$,", "Normal", 11, 20),
  new PriceRange("$$$", "Expensive", 21, 50)
];

function Restaurants(name, averageCostPerPerson) {
  this.name = name;
  this.averageCostPerPerson = averageCostPerPerson;
}

let restaurants = [
  new Restaurants("Taco Bell", 8),
  new Restaurants("McDonalds", 18),
  new Restaurants("Burger King", 15),
  new Restaurants("Little Caesars", 12)
];

function filterRestaurants(restaurants, priceRangeToFilter) {
  let result = [];
  for (let restaurant of restaurants) {
    const { averageCostPerPerson: avgCost } = restaurant;
    if (avgCost >= priceRangeToFilter.minPerPerson && avgCost <= priceRangeToFilter.maxPerPerson) result.push(restaurant.name);
  }
  return result;
}

//Filter all restaurants with an avg cost that fits in normal price range

priceToFilter = priceRange[1]; //Get the price range object that fits in normal range!
//console.log(priceToFilter);

restaurantsInNormalRangePrice = filterRestaurants(restaurants, priceToFilter);

console.log("Restaurants in normal price range:");
for (let restaurant of restaurantsInNormalRangePrice) console.log(restaurant);

//Filter all restaurants with an avg cost that fits in cheapest price range

priceToFilter = priceRange[0]; //Get the price range object that fits in normal range!
//console.log(priceToFilter);

restaurantsInNormalRangePrice = filterRestaurants(restaurants, priceToFilter);
console.log("-------------------------");
console.log("Restaurants in cheapest price range:");
for (let restaurant of restaurantsInNormalRangePrice) console.log(restaurant);
