//build an array of cooling methods
var cooking = [
"slow cooked",
"barbequed",
"boiled",
"fied",
"baked",
"microwaved",
"deep fried",
"steamed"
];
//build an array of foods
var foods = [
"noodle",
"musubi",
"steak",
"pork",
"carrot",
"oreo",
"bacon",
"spaghetti",
"egg",
"ham",
"baby back ribs",
"ice cream",
"chicken",
"pizza",
"fish",
"cake",
"tomato",
"rice"
];
//concat the cooking method and the food based on a random sequence 
var x = Math.floor(Math.random() * cooking.length);
var y = Math.floor(Math.random() * foods.length);
window.alert(cooking[x]+foods[y]);
