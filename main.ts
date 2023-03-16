input.onPinPressed(TouchPin.P0, function () {
    music.playTone(aNote, music.beat(tempo))
})
input.onButtonPressed(Button.A, function () {
    nextNote += 1
    if (nextNote == 3) {
        nextNote = 0
    }
    aNote = noteArray1[nextNote]
    bNote = noteArray2[nextNote]
    cNote = noteArray3[nextNote]
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(cNote, music.beat(tempo))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(698, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    nextTempo += 1
    if (nextTempo == 3) {
        nextTempo = 0
    }
    tempo = tempoArray[nextTempo]
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(bNote, music.beat(tempo))
})
input.onGesture(Gesture.Shake, function () {
    // music.playMelody("C5 A B G A F G E ", 266)
    music.playTone(659, music.beat(tempo))
    music.playTone(587, music.beat(tempo))
    music.playTone(523, music.beat(tempo))
    music.playTone(587, music.beat(tempo))
    for (let i = 1; i<=3; i++){
        music.playTone(659, music.beat(tempo))
    }
pause(200)
for (let j = 1; j <= 3; j++) {
        music.playTone(587, music.beat(tempo))
    }
pause(200)
music.playTone(659, music.beat(tempo))
    for (let k = 1; k <= 2; k++) {
        music.playTone(784, music.beat(tempo))
    }
pause(200)
music.playTone(659, music.beat(tempo))
    music.playTone(587, music.beat(tempo))
    music.playTone(523, music.beat(tempo))
    music.playTone(587, music.beat(tempo))
    for (let l = 1; l <= 3; l++) {
        music.playTone(659, music.beat(tempo))
    }
pause(200)
music.playTone(659, music.beat(tempo))
    for (let m = 1; m <= 2; m++) {
        music.playTone(587, music.beat(tempo))
    }
pause(200)
music.playTone(659, music.beat(tempo))
    music.playTone(587, music.beat(tempo))
    music.playTone(523, music.beat(tempo))
})
let nextTempo = 0
let nextNote = 0
let cNote = 0
let bNote = 0
let aNote = 0
let tempoArray: number[] = []
let noteArray3: number[] = []
let noteArray2: number[] = []
let noteArray1: number[] = []
let tempo = 0
noteArray1 = [330, 440, 587]
noteArray2 = [349, 494, 659]
noteArray3 = [392, 523, 698]
tempoArray = [BeatFraction.Whole, BeatFraction.Quarter, BeatFraction.Double]
aNote = noteArray1[0]
bNote = noteArray2[0]
cNote = noteArray3[0]
tempo = tempoArray[0]
