function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = Number(arr.shift());
    let typeCriteria = arr.pop();
    for (let char of arr) {
        let songInfo = char.split("_");
        let song = new Song(songInfo[0], songInfo[1], songInfo[2]);
        songs.push(song);
    }
    for (let song of songs) {
        if (song.typeList === typeCriteria) {
            console.log(song.name);
        }
        if (typeCriteria === "all") {
            console.log(song.name)
        }
    }
}
songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
console.log("---");
songs([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);
console.log("---");
songs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);