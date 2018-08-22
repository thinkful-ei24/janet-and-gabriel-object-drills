const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' }
];
const findOne = function(arr, query) {
  // See for-of loops - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  // Iterates through array placing current element in locally scoped variable `hero`
  for (const hero of arr) {
    console.log(hero);
    let assumeMatch = true;

    // loop through each key in `query` object
    for (const key in query) {
      // when first value in query[key] does NOT match hero[key]
      // break out of the loop and set assumeMatch = false
      if (query[key] !== hero[key]) {
        assumeMatch = false;
        break;
      }
    }

    // if failed to match, continue to next hero or exit loop if at last hero
    if (!assumeMatch) continue;

    // otherwise a match was found! return the hero
    return hero;
  }

  // heroes array was exited without a match so return null
  return null;
};
// console.log(
//   findOne(HEROES, { id: 1, name: 'Captain America', squad: 'Avengers' })
// );
console.log(findOne(HEROES, { id: 1 }));
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
// => null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
// => null

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: 'Justice League' }));
// => { id: 4, name: 'Superman', squad: 'Justice League' }
