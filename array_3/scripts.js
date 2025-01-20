// let age = 200; 
// let age2 = age;
// console.log(age, age2);
// age = 100;
// console.log(age, age2);

// let name = "mad";
// let name2 = "self";
// console.log(name, name2);
// name = "madhushree";
// console.log(name, name2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players);

// console.log(players, team);
//  team[3] ="Lux";
//  console.log(players, team);


 //copying the array
 const team2 = team.slice();
 team2[3] = "Lux";
 console.log(team2, team)
 

 const team3 = [].concat(players);
 console.log(team3);

 const team4 = [...players];
 team4[3] = "jewel";
console.log(team4)

const team5 = Array.from(players);
team5[3] = "lol";
console.log(team5)

// objects
const person = {
    name: 'Madhushree',
    age: 80
  };

  const captain = person;
  captain.number = 99;
  console.log(captain)

  const cap2 = Object.assign({}, person, {number: 50});
  console.log(cap2);

  const cap3 ={...person};

  const wes = {
    name: 'Wes',
    age: 100,
    social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
    }
  };

  console.clear();
  console.log(wes);

  const dev= Object.assign({}, person);
  const dev2=JSON.parse(JSON.stringify(dev));
  console.log(dev2);

