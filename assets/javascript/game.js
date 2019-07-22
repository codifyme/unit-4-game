// random Result
var random_result;

//Game counter
var lostCounter = 0;
var winCounter = 0;

//Previous Number
var previous = 0;

//$(".crystal").attr('class');

var resetAndStart = function() {
  $('.crystals').empty();

  random_result = Math.floor(Math.random() * 120) + 19;

  $('#result').hmtl('Random result: ' + random_result);

  for (var index = 0; index < 4; index++) {
    var random = Math.floor(Math.random() * 12);
    //console.log(random);

    var crystal = $('<div>');
    crystal.attr({
      class: 'crystal',
      'data-random': random
    });

    // This is the crystal where we send everything back
    //crystal.html(random);
    $('.crystals').append(crystal);
  }
  $('#previous').html('Total Score: ', +previous);
};

//resetAndStart();

//Event Delegation

var resetAndStart = function() {};
//crystal button on click function

//Event Delegation
//now this element is coming listen to the dom in this new element
$(document).on('click', '.crystal', function() {
  var num = parseInt($(this).attr('data-random'));

  previous += num;
  $('#previous').html('Total score: ', +previous);

  console.log(previous);

  if (previous > random_result) {
    lost++;

    $('#lost').html('You Lost:' + lost);

    previuos = 0;

    resetAndStart();
  } else if (previous === random_result) {
    win++;

    $('#win').html('You Win:' + win);
    previous = 0;

    resetAndStart();
  }
});
// Speudo Coding
// I have a game of 4 crystals and random Result
// Every crystal have a random number between 1-12 as it mentioned in the assignment
// A new random number should be generate every single time a LOST or WIN on those 4 crystals
// By ckicling in any crystal, it should be adding in the previous result until it equal to the random result
// If it is greater than the random result, it decrement a lost counter
//if it is equal, then we increment a win counter
//It look like this program is showing the Total score but not
//the win and lost. I tried to find out what is causing problem regarding the first "resetAndStart" as well as the second and third "resetAnd Start"
//Hopefully is not a big problem but I tried to find out with all the review of inside class activities.
