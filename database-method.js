const Database = {
  store: {
    // Create heroes array of objects
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' }
    ]
  },
  // Create findOne method - takes query object as arg
  findOne: function(query) {
    // for of loop through this.store.heroes
    // when called as Database.findOne this' invocation
    // assigns Database to this
    for (let hero of this.store.heroes) {
      // If every key provided in the object query has a property
      // for its key and hero[key] is equal to query[key] return herop
      if (
        Object.keys(query).every(
          key => hero.hasOwnProperty(key) && hero[key] === query[key]
        )
      )
        return hero;
    }
    // else return null
    return null;
  }
};
console.log(Database.findOne({ id: 2 }));
// => { id: 2, name: 'Iron Man', squad: 'Avengers' }
