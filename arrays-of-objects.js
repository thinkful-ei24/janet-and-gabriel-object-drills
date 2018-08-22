'use strict';
const arrayOfObjects = [
  { name: 'Gandalf', jobTitle: 'Wizard', boss: 'Saruman' },
  { name: 'Saruman', jobTitle: 'Big Wizard', boss: 'Sauron' },
  { name: 'Frodo', jobTitle: 'Ring-bearer', boss: 'Sauron' },
  { name: 'Faramir', jobTitle: 'Captain of Gondor', boss: 'Aragorn' },
  { name: 'Aragorn', jobTitle: 'The one true rightful King of Gondor' }
];

for (const person of arrayOfObjects) {
  person.hasOwnProperty('boss')
    ? console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`)
    : console.log(`${person.jobTitle} ${person.name} reports to no one`);
}
