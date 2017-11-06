var rpio = require('rpio')

var ledOn = false
rpio.open(22, rpio.INPUT, rpio.PULL_DOWN)
rpio.open(18, rpio.OUTPUT, ledOn ? rpio.HIGH : rpio.LOW)

function blinkLED() {
  console.log("blinkLED")
  ledOn = !ledOn
  rpio.write(18, ledOn ? rpio.HIGH : rpio.LOW)
}

var blinkInterval = setInterval(blinkLED, 250)

function endBlinkLED() {
  rpio.write(18, rpio.LOW)
  clearInterval(blinkInterval)
}

setTimeout(endBlinkLED, 1000)

function pushButton() {
  var buttonPushed = rpio.read(22)
  console.log("pushButton %d", buttonPushed)
  rpio.write(18, buttonPushed > 0 ? rpio.HIGH : rpio.LOW)
}

rpio.poll(22, pushButton)
