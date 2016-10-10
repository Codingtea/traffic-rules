
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;




body.onkeydown = function(e){

  if (e.keyCode === 39 ){

var previousLocationCounter = taxiLocationCounter;
    taxiLocationCounter++
    moveTaxi(previousLocationCounter, taxiLocationCounter)
    displayMessage(e.keyCode);
  }
  else if (e.keyCode === 37 ){

  var previousLocationCounter = taxiLocationCounter;
      taxiLocationCounter--
      moveTaxi(previousLocationCounter, taxiLocationCounter)
      displayMessage(e.keyCode);
  }
      //up arrow    : 38


    // down  : 37


    //down arrow  : 40

    displayMessage(e.keyCode);



    // to make the second TrafficLight `Orange`
    // var tl = new TrafficLight(2);
    // tl.orange();


    var trafficLight = new TrafficLight(taxiLocationCounter);
    trafficLight.red();
     trafficLight.state();

};
