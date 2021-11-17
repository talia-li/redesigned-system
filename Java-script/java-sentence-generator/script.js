console.log("it works!")

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make","continue"];
let adjectives = ["good",'different',"possible"];

let noun = nouns [Math.floor(Math.random()*nouns.length)];
let adjective= adjectives [Math.floor(Math.random()*nouns.length)];
let verb = verbs [Math.floor(Math.random()*nouns.length)];


console.log(noun)

let sentence = `My ${noun} leaps ${adjective} when i ${verb} in the sky.`
 console.log(sentence)