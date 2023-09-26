enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(0)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.setGroup(1)
