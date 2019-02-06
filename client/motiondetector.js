var WebSocketClient 

var Gpio = require('onoff').Gpio,
  buzzer = new Gpio(18, 'out'),
  pir = new Gpio(17, 'in', 'both');
 
pir.watch(function(err, value) {
  if (err) exit();
  buzzer.writeSync(value);
  console.log('motion detected');
  if(value == 1) {
      // websocket send function goes here
  }
});
 
 
function exit() {
  buzzer.unexport();
  pir.unexport();
  process.exit();
}