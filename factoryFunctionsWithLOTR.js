'use strict';
function createCharacter(lotrCharObj){
  return {
    name: lotrCharObj.name, 
    nickName: lotrCharObj.nickName,
    race: lotrCharObj.race,
    origin: lotrCharObj.origin,
    attack: lotrCharObj.attack,
    defense: lotrCharObj.defense,
    weapon: lotrCharObj.weapon,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`;   
    },
    

    evaluateFight: function(characterObj){
      const characterAttack= lotrCharObj.attack;
      //console.log(characterAttack);
      const characterDefense= lotrCharObj.defense;
      const enemyAttack= characterObj.defense;
      console.log(enemyAttack);
      const enemyDefense=characterObj.defense;
      //This is opponent damage
      let x = characterAttack-enemyDefense;
      //This is self damage
      let y= enemyAttack-characterDefense;
      if (enemyAttack < characterDefense){
        //takes no damage
        y = 0;
        return `Your opponent takes ${x} damage and you receive  ${y} damage.`;
      }else if(characterAttack < enemyDefense) {
        x = 0;
        return `Your opponent takes ${x} damage and you receive  ${y} damage.`;
      } else {
        return `Your opponent takes ${x} damage and you receive  ${y} damage.`;
      }
      

    }
  };
}

const Gandalf = {
    name: 'Gandalf the White',
    nickName: 'gandalf',
    race:'Wizard',
    origin:'Middle Earth',
    attack: 10,
    defense: 6,
    weapon: 'Staff'
};


const Bilbo = {
    name: 'Bilbo Baggins',
    nickName: 'bilbo',
    race:'Hobbit',
    origin:'The Shire',
    attack: 2,
    defense: 1,
    weapon: 'Ring'
};


const Frodo = {
    name: 'Frodo Baggins',
    nickName: 'frodo',
    race:'Hobbit',
    origin:'The Shire',
    attack: 3,
    defense: 2,
    weapon: 'Sting'
};

const Aragorn= {
    name: 'Aragorn son of Arathorn ',
    nickName: 'aragorn',
    race:'Man',
    origin:'Dunnedain',
    attack: 6,
    defense: 8,
    weapon: 'Anduril'
};

const Legolas= {
    name: 'Legolas',
    nickName: 'legolas',
    race:'Elf',
    origin:'Woodland Realm',
    attack: 8,
    defense: 5,
    weapon: 'Bow and Arrow'
};


const Arwen= {
    name: 'Arwen Undomiel',
    nickName: 'arwen',
    race:'Elf',
    origin:'RivenDell',
    attack: 15,
    defense: 9,
    weapon: 'Hadhafang'
};

const characters = 
[createCharacter(Gandalf), 
    createCharacter(Bilbo), 
    createCharacter(Frodo), 
    createCharacter(Aragorn), 
    createCharacter(Legolas), 
    createCharacter(Arwen)];

console.log(characters);
characters.find(character => {
  return character.nickName === 'aragorn'
}).describe();

const hobbits = characters.filter(character => character.race === "Hobbit");
const highAttack = characters.filter(character => character.attack > 5);
console.log(highAttack);
console.log(characters[0].describe());

