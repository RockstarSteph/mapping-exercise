

// I assume this is what the .map would be doing for us instead of writing it all out.


var words = ["ground", "control", "to", "major", "tom"];
var mapping = function(arr, func){
 var arr2 = [];
 for (var word of arr){
  arr2.push(func(word));
   }
   console.log(arr2);
 return arr2;

}


// that's a function being called
mapping(words, function(word) {
 return word.length;
});

// that's a function being called
mapping(words, function(word) {
  return word.toUpperCase();
});

// that's a function being called
mapping(words, function(word) {

 console.log(word.split('').reverse().join(''))

  return word.split('').reverse().join('');

});
