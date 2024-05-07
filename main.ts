input.onButtonPressed(Button.A, function () {
    basic.showString(" Morad Mohamed")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
