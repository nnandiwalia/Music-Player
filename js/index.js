let playBtn = document.querySelector("#playBtn");
let cover = document.querySelector("#cover");
let songName = document.querySelector("#name");
let singerName = document.querySelector("#singerName");
let seek = document.querySelector("#seek");
let audio;
let currentSongIndex = 0;

let playList = [
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
    img: "assets/img/dream-cover-image.jpg",
  },
  {
    name: "Enna khush Rakhunga",
    singerName: "Sucha Yaar",
    path: "assets/songs/Enna khush rakhunga.mp3",
  },
  {
    name: "Fallin Star",
    path: "assets/songs/Fallin Star.mp3",
  },
  {
    name: "Google Vs FB",
    singerName: "Game Changerz",
    path: "assets/songs/Google Vs FB .mp3",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
    img: "assets/img/dream-cover-image.jpg",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
    img: "assets/img/dream-cover-image.jpg",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
    img: "assets/img/dream-cover-image.jpg",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
    img: "assets/img/dream-cover-image.jpg",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
    img: "assets/img/dream-cover-image.jpg",
  },
  {
    name: "Dream",
    singerName: "Inder Chahal",
    path: "assets/songs/Dream.mp3",
  },
];

audio = new Audio(playList[0]?.path);
cover.setAttribute("src", playList[0]?.img || "assets/img/logo.png");
songName.innerHTML = playList[0]?.name;
singerName.innerHTML = playList[0]?.singerName || "Unknown";
document.title = "Music Player - " + playList[0]?.name;

const setSong = (index) => {
  if (audio) {
    audio.pause();
  }
  currentSongIndex = index;
  audio = new Audio(playList[index]?.path);
  cover.setAttribute("src", playList[index]?.img || "assets/img/logo.png");
  songName.innerHTML = playList[index]?.name;
  singerName.innerHTML = playList[index]?.singerName || "Unknown";
  audio.play();
  playBtn.setAttribute("name", "pause-outline");
  cover.classList.add("h-72");
  document.title = "Music Player - " + playList[index]?.name;
};

const changeDuration = (e) =>
  (audio.currentTime = (e.value * audio.duration) / 100);

setInterval(() => {
  seek.value = (audio.currentTime / audio.duration) * 100;
}, 1000);

const playPause = () => {
  if (playBtn.getAttribute("name") === "play-outline") {
    audio.play();
    playBtn.setAttribute("name", "pause-outline");
  } else {
    audio.pause();
    playBtn.setAttribute("name", "play-outline");
  }
  cover.classList.toggle("h-72");
};

const prevSong = () => {
  if (currentSongIndex <= 0) {
    currentSongIndex = playList.length - 1;
  } else {
    currentSongIndex--;
  }
  setSong(currentSongIndex);
};
const nextSong = () => {
  if (currentSongIndex >= playList.length - 1) {
    currentSongIndex = 0;
  } else {
    currentSongIndex++;
  }
  setSong(currentSongIndex);
};

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    playPause();
  }
});
