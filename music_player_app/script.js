const songs = [
    "dreams.mp3",
    "summer.mp3",
    "elevate.mp3"
];

const player = document.getElementById("player")

function createSongList() {
    const list = document.createElement('ol');
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item)

    }
    return list;
}



const songList = document.getElementById("songList");
songList.appendChild(createSongList());
const links = document.querySelectorAll("li");

for (const link of links) {
    link.addEventListener('click', setSong)

}

function setSong(e) {
    // console.log(e);
    document.querySelector("#headphones").classList.remove("pulse");
    const source = document.getElementById('source')
    source.src = "songs/" + e.target.innerText;
    document.querySelector("#currentSong").innerText =
        `Now Playing: ${e.target.innerText}`
    player.load();
    player.play();
    document.querySelector("#headphones").classList.add("pulse");
};

function playAudio() {
    if (player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById("volumneSlider")
slider.oninput = function (e) {
    // console.log(e);
    const volume = e.target.value;
    player.volume = volume;
};

function updateProgress() {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById("progress")
        progressBar.value = (player.currentTime / player.duration) * 100
    }

    // console.log(player.currentTime)
    // console.log(player.duration)
};
