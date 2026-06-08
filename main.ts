controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    info.changeLifeBy(-2)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    info.changeScoreBy(Times * 6)
})
let Times = 0
Times = 1
info.setScore(0)
info.setLife(450)
info.startCountdown(1200)
forever(function () {
    Times += 2
})
