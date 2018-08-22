//create an array of adjectives or adverbs 
var adjectives = [
"strong",
"nice",
"smart"
];
//Ask the person for his or her name
var first= prompt("Enter a name");
//Generte a random number
var x = Math.floor(Math.random() * adjectives.length);
//Let the user know what kind of person are. For example,
//username followed or preceded by the array iteam.
window.alert([first + adjectives[x]]);
