const randomWords = ["throne",
'hang',
'bump',
'apologise',
'trousers',
'agree',
'cover',
'hallowed',
'enchanting',
'flame',
'hilarious',
'bouncy',
'purring',
'quaint',
'damp',
'aboriginal',
'jagged',
'shelter',
'cluttered',
'rabid',
'pets',
'adamant',
'lumber',
'turkey',
'bells',
'nerve',
'juvenile',
'scratch',
'man',
'belligerent',
'animal',
'two',
'shade',
'magic',
'songs',
'hands']

//From an array of 36 random words, this function selects and returns a random word. 
//Math.random() produces a random value between 0 and 1, which is then mulitplied by the 
//length of the array, before being rounded to a whole number by Math.floor. 
//The word is converted to upper case before being returned. 

export default function RandomWord(){ 
    return randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
}