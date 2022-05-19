function gramophone(band, album, song) {
    let songDudation = (album.length * band.length) * song.length / 2;
    let oneRotation = 2.5;
    let rotations = Math.ceil(songDudation / oneRotation);

    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');