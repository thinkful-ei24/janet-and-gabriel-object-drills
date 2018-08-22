const arrayOfObjects = [
  { name: 'Gandalf', jobTitle: 'Wizard' },
  { name: 'Saruman', jobTitle: 'Big Wizard' },
  { name: 'Frodo', jobTitle: 'Ring-bearer' },
  { name: 'Faramir', jobTitle: 'Captain of Gondor' },
  { name: 'Aragorn', jobTitle: 'The one true rightful King of Gondor' }
];

arrayOfObjects.forEach(person =>
  console.log(`Name: ${person.name} Job title: ${person.jobTitle}`)
);
