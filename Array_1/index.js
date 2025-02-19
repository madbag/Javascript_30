const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

//1. filter
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);
console.table(fifteen);

//2. Map
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.table(fullNames);

//3. Sort
const dateOfBirth = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
//     function(firstPerson, secondPerson) {
//     if(firstPerson.year > secondPerson.year) {
//         return 1
//     } else {
//         return -1
//     }
// })

console.table(dateOfBirth);

//4. How many years did all the inventors live all together?
// let totalYears = 0;

// for (let i = 0; i < inventors.length; i++) {
//     totalYears += inventors[i].year
// }

// console.log(totalYears);

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

//5. Sort the inventors by the year they lived
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
  // if(lastGuy > nextGuy) {
  //   return -1
  // } else {
  //   return 1
  // }
});

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a")); //convert this in array
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de")); //in the browser, Firefox did not perform well here


  //7. Sort by last name
  const lastName = people.sort((a, b) => {
    const [alast, afirst] = a.split(", ")
    const [blast, bfirst] = b.split(", ")
    // console.log(alast, afirst)
    // console.log(blast, bfirst)

    return alast > blast ? 1 : -1;
  });
  console.table(lastName)

  //8. Reduce Exercise
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const result = data.reduce((obj, item) => {
    if (!obj[item]){
      obj[item] = 0;
    }
    obj[item]++;
    // console.log(item);
    return obj;
  },{})

  console.table(result);