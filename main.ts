input.onButtonPressed(Button.A, function () {
    Theodore += 1
    basic.showNumber(Theodore)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Frank)
    basic.pause(1000)
    Frank += 1
    basic.showNumber(Frank)
    basic.clearScreen()
})
let Frank = 0
let Theodore = 0
Theodore = 0
Frank = 0
