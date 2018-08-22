const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' }
];
function findOne(arr, query) {
  for (let hero of arr) {
    if (
      Object.keys(query).every(
        key => hero.hasOwnProperty(key) && hero[key] === query[key]
      )
    )
      return hero;
  }
  return null;
}
// console.log(
//   findOne(HEROES,  id: 1, name: 'Captain America', squad: 'Avengers' })
console.log(findOne(HEROES, { id: 1 }));
// => { id: 1, name: 'Captain America'uad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
// => null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// => null

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: 'Justice League' }));
// => { id: 4, name: 'Superman', squad: 'Justice League' }
