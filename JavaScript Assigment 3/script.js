

// -----------*String Length Calculation*-------------//
var myString = "Hello, World!";
var secondvar = (myString);
console.log("Length of the string is:", secondvar.length);


//--------------*String to Uppercase*-----------------//

var foruppercase = "hello world"
var secondvartouppercase = (foruppercase)
console.log(secondvartouppercase.toUpperCase());


//--------------*String to Uppercase*-----------------//

var forlowercase = "HELLO WORLD"
var secondvartolowercase = (forlowercase)
console.log(secondvartolowercase.toLowerCase());


//--------------*Count Specific Character*---------------//

var sentence1 = "As the sun lazily descended beyond the horizon, casting a warm glow over the tranquil countryside, the gentle rustle of leaves whispered secrets to the evening breeze, while the distant murmur of a flowing stream provided a soothing melody to the ears of nature's silent observers, the birds perched atop swaying branches, the industrious ants scurrying along their well-trodden paths, and the majestic trees standing tall as guardians of the land; meanwhile, in the quaint cottage nestled amidst this picturesque scene, a flickering fire danced in the hearth, casting flickering shadows upon the worn wooden floors, as the aroma of freshly baked bread wafted through the  mingling with the scent of wildflowers that adorned the windowsills, creating a symphony of sensations that enveloped the senses in a comforting embrace, inviting one to momentarily forget the cares of the world outside and bask in the simple joys of existence, where time seemed to slow its relentless march and every moment held the promise of serenity and contentment, like a cherished memory etched forever in the tapestry of the heart"
console.log(sentence1 .indexOf ("the"));



//------------*Substring Extraction*-------------//

var inputString = "This is a sample string";
var startIndex = parseInt(prompt("Enter the start index:"));
var endIndex = parseInt(prompt("Enter the end index:"));
if (isNaN(startIndex) || isNaN(endIndex) || startIndex < 0 || endIndex < 0 || endIndex <= startIndex || endIndex > inputString.length) {
    console.log("Invalid indices. Please enter valid start and end indices.");
} else {
    var substring = inputString.substring(startIndex, endIndex);
    console.log("Substring:", substring);
}

