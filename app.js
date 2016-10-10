
  var body = document.querySelector("body");


//find the body tag and store it in a variable called 'body'


var taxiLocationCounter = 1;




body.onkeydown = function(e){


  // to make the second TrafficLight `Orange`
   var tl = new TrafficLight(taxiLocationCounter);

   if (e.keyCode === 40) {
     if (tl.state() === 'green') {
       tl.red();
     }

       }

       if (e.keyCode == 38) {
         if (tl.state() === 'red') {
           tl.green();
         }
       }

      if (e.keyCode === 39 ){

        if (tl.state() === 'red') {
          ///Do nothing
        }
        else {
          var previousLocationCounter = taxiLocationCounter;
              taxiLocationCounter++;
          var currentLocation = taxiLocationCounter;

              moveTaxi(previousLocationCounter,currentLocation )
              //displayMessage(e.keyCode);
        }

      }

      if (e.keyCode === 37 ){

        if (tl.state() === 'red') {
          ///Do nothing
          displayMessage('Light is RED. STOP!!')
        }
        else {
          var previousLocationCounter = taxiLocationCounter;
              taxiLocationCounter--;
          var currentLocation = taxiLocationCounter;

              moveTaxi(previousLocationCounter,currentLocation )
            //  displayMessage(e.keyCode);
        }

      }
}




/*









//
//     var trafficLight = new TrafficLight(taxiLocationCounter);
//
// if  (e.keyCode === 38)
// {
//   //chek the light statei
// if (trafficLight.state() === 'green' || trafficLight.state()'orange')
//    {
//     trafficLight.red();
//     }
// }
//
//
// if (keyCode === 40){
//   if (trafficLight.state()=== 'red'){
//     trafficLight.green();
//   }
//
//   desplayMessage('Go Go Go WHAM!')
//
//   if (e.keyCode === 39){
//     if(trafficLight.state() === 'red'){
//       desplayMessage('Red,switch to green');
//
//
//     }
//   }
//
//
//   }
// }
//     trafficLight.red();
//
//      trafficLight.state();
//
// };
*/
