// Challenge
/*

Directions

Since we know the data structure Maps lets use that here

Get all the items from the map that has a value type of ball

Requirements

- Create a for...of loop that iterates over the maps
- Skip the items if the value is not ball
- Log the items that have a value of ball

Use this data to iterate over

Data = [
  ["Globe", "ball"],
  ["Bat", "stick"],
  ["Basketball", "ball"],
  ["Shoes", "gear"],
  ["Football", "ball"],
  ["Racket", "equipment"],
  ["Cap", "accessory"],
]
*/

const data = [
  ["Globe", "ball"],
  ["Bat", "stick"],
  ["Basketball", "ball"],
  ["Shoes", "gear"],
  ["Football", "ball"],
  ["Racket", "equipment"],
  ["Cap", "accessory"],
];

for (const [key, value] of data) {
  if (value === "ball") {
    console.log(key);
  }
}
