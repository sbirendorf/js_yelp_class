function Yelp(restaurants, ratings) {
  this.restaurants = restaurants;
  this.ratings = ratings;
}

/*
Returns list of Restaurant within radius.

  latitude: latitude in number
  longitude: longitude in number
  radius: kilometer in number
  diningHour: If null, find any restaurant in radius.
              Otherwise return array of open restaurants at specified hour.
  sortByRating: If true, sort result in descending order,
                highest rated first.
*/
Yelp.prototype.find = function(latitude, longitude, radius, diningHour, sortByRating) {
  // IMPLEMENT ME
  console.log(y);
  y.restaurants.forEach(function(entry) {
    console.log(entry);
	});
 
 // Math.acos(Math.sin(1.3963) * Math.sin(Lat) + Math.cos(1.3963) * Math.cos(Lat) * Math.cos(Lon - (-0.6981))) * 6371 <= 1000);
}

function Restaurant(id, name, latitude, longitude, openHour, closeHour) {
  this.latitude = latitude;
  this.longitude = longitude;
  this.id = id;
  this.name = name;
  this.openHour = openHour; // in [0-23]
  this.closeHour = closeHour; // in [0-23]
}

function Rating(id, rating) {
  this.id = id;
  this.rating = rating; // in [1-5]
}

function main() {
  restaurants = [new Restaurant(0, "Domino's Pizza", 37.7577, -122.4376, 7, 23),new Restaurant(1, "Domino's Pizza1", 32.7577, -112.4376, 7, 23)]; // Omitted
  ratings = [new Rating(0, 3),new Rating(1, 4)]; //Omitted

  y = new Yelp(restaurants, ratings);
  y.find(37.7, -122.6, 5, null, false);
}