basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(10)
})
