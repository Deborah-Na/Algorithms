var floor = Math.floor(1.8);
//this rounds the number down

var ceiling = Math.ceil(Math.PI);
//rounds the number up

var random = Math.random();
//Generates a random decimal number between 0,0(inclusivie and 1 (not inclusive), 1.e. 0 + 0 = .999999999)

//Dice Roller
// Using what we've larned about the Math Library in JavaScript, complete the folllowing function
//that should return an integer value between 1-6 at random.
function d6() {
    var roll = Math.random();
    roll = 6 * roll;
    roll = Math.ceil(roll);
    return roll;
}

var playerRoll = d6();
console.log("The player rolled" + playerRoll);

//Consult the Oracle
//Using the following array, write a function that will answer all of our quetions by randomly choosing a response
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function answerMe() {
    var answer = lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
    return answer;
}
console.log("Your answer is" + answerMe());


var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

//Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
for (var i = 0; i < pokemon.length / 2; i++) {
    if (pokemon[i].types == "poison")
        console.log(pokemon[i].name.reverse());
}
//console.log the first type of all the pokémon whose second type is "flying"
// for( var i = 0; i< pokemon.length; i++){
//     if(pokemon[i].types[1]=="flying")
//     console.log(pokemon[i].name)
// }
//console.log the names of the pokémon whose only type is "poison"
// for( var i = 0; i< pokemon.length; i++){
//     if(pokemon[i].types == "poison")
//     console.log(pokemon[i].name);
// 
//console.log the pokémon objects that have more than one type
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.length > 1)
        console.log(pokemon[i].name)
}
//console.log the pokémon objects whose id is evenly divisible by 3
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id % 3 == 0)
        console.log(pokemon[i].name);
}





//2.4.22 Algos Challenge

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
function isPresent2d(arr2d,value){
    for(var i =0; i <arr2d.length; i++){
        for(var j = 0; j < arr2d[i].length; j++){
            if(arr2d[i][j] == value)
            return true;
        }
            
    }return false;
        
    }


// We can console.log the `8` in this array if we
console.log(isPresent2d(arr2d,4));
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for(var i = 0; i<arr2d.length; i++){
        for(var j =0; j <arr2d[i].length; j++){
            flat.push(arr2d[i][j])
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]



