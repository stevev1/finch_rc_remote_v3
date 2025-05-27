input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendValue("running", 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendValue("running", 0)
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("ax", input.acceleration(Dimension.X))
    radio.sendValue("ay", input.acceleration(Dimension.Y))
})
