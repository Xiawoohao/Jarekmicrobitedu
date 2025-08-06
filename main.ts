basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
