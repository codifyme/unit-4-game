$(document).ready(function() {
  resetAndStart();
  // random Result
  var random_result;

  //Game counter
  var lostCounter = 0;
  var winCounter = 0;

  //Previous Number
  var previous = 0;

  //$(".crystal").attr('class');

  function resetAndStart() {
    // $('.crystals').empty();

    random_result = Math.floor(Math.random() * 120) + 19; //it never go below 19
    console.log(random_result);

    $('#result').text('Random result: ' + random_result);

    for (var index = 0; index < 4; index++) {
      var random = Math.floor(Math.random() * 11) + 1;
      //console.log(random);
    }
    $('#previous').text('Total Score: ', +previous);
  }

  // var resetAndStart = function() {};
  //crystal button on click function

  //Event Delegation
  //now this element is coming listen to the dom in this new element
  $(document).on('click', '.crystal', function() {
    var num = parseInt($(this).attr('data-random'));

    previous += num;
    $('#previous').text('Total score: ', +previous);

    console.log(previous);
    $('#previous').text('Total Score: ' + previous);

    if (previous > random_result) {
      alert('You losses');
      lostCounter++;

      $('#lostCounter').text('Losses:' + lostCounter);

      previous = 0;

      resetAndStart();
    } else if (previous === random_result) {
      alert('You win');
      winCounter++;

      $('#winCounter').text('Wins:' + winCounter);
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
});

//var crystal = $('<div>'); //
//crystal.attr({
//class: 'crystal',
//'data-random': random
//});

// This is the crystal where we send everything back
//crystal.html(random);
// $('.crystals').append(crystal);
// console.log($(this));
