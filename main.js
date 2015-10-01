//Exercise 1 + 2

// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

sum();

function sum(x, y){
  return x + y;
};

or using reduce

[two parameters].reduce(function(x,y){
  return x+y;
});

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

avg();

function avg(a, b, c){
  var total= (a+b+c)/3;
  return total;
};




// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

getLength('string');

function getLength("string"){
  return string.length;
};



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

greaterThan ();

function greaterThan (a, b){
  if (b>a){
    return true;
  } else{
    if (b<a)
    return false;
  }
};
 




// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
 
greet ('name');

function greet('X') {
  return 'Hello, '+ X + '!';
};





// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

 madLib(//4 parameters 
  );

function madLib("quick", "fox", "over", "fence"){
  var sentence = "The" + "0" + "brown" + "1" + "jumps" + "3" + "the" + "4";
  return sentence;
};

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

max (a,b);

function max(a, b){
    if (a>b);
    return a;
  };
    else{
      return b;
 
 };




// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
maxOfThree(a, b, c);

function maxOfThree(a, b, c){
  if (a> b && c){
    return a;
  } else 
  if (b> a && c) {
    return b;
  }
  } else 
  if  (c> a && b) {
    return c;  
  }
    
});

    //...
  


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
   var string='char'[length 0];
   if (string === 'a'){
    return true;
   } 
   else if (string === 'e'){
    return true;
   }
   else if (string === 'i'){
    return true;
   }
   else if (string === 'o'){
    return true;
   }
   else if (string === 'u'){
    return true;
   }
   else {
    return false;
   }
};

would need more if-then-else statements for capital letters as well, since 'a' !== 'A'

//review from class Oct 1

function isVowel(char){
  var vowels ='aeiou';
  if (vowels.indexOf(char)!== -1) {
    return true;
  } 
    return false;
  }


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

Uses isVowel function from above
function rovarspraket('phrase'){
  var newPhrase =[''];
  for (var i){
    if (isVowel(phrase[i])){
      newPhrase + phrase[i] + "o" +phrase[i];
    }
    else {
      newPhrase+phrase[i];
    }
  }

  return newPhrase;
    //...
}
//"some string".split("");

//from class Oct 1(next day review)
function rovarspraket(phrase){
  var chars=phrase.split(''); //no spaces b/w '' b.c don't need space in phrase evaluated
  var finalPhrase=[];
  chars.forEach(function(char){
    if (!isVowel(char) && char!==' '){//check for consonant, check for spaces(' ')
        finalPhrase.push(char + 'o' + char);
    }else{//must be a vowel
        finalPhrase.push(char);
    }
  });
    return finalPhrase.join('');
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

uses .join('')

function reverse(string){
    return string.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------



    function findLongestWord(array){

      array.forEach(function(i){
      console.log(i.length);
      });
      }


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  words.filter(function(words)

  {return words.length>i});
    //...see above if this needs to be switched
  }

//review from class Oct 1

function filterLongWords(words, i){
  var NewArr=words.filter(function(word)){ //filteruses callback method
    return word.length>i;
  });
    return NewArr; //needs to be an array, b/c don't know if result will be a single item 

  }
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}

//review from class Oct 1
