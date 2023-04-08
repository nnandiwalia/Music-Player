let playBtn = document.querySelector("#playBtn");
let cover = document.querySelector("#cover");
let songName = document.querySelector("#name");
let likeBtn = document.querySelector("#heart");
let singerName = document.querySelector("#singerName");
let seek = document.querySelector("#seek");
let playList = document.querySelector("#playList");
let box = document.querySelector("#box");
let audio;
let currentSongIndex = 0;

let songs = [
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
    singerName: "Harnoor",
    path: "assets/songs/Fallin Star.mp3",
  },
  {
    name: "Google Vs FB",
    singerName: "Game Changerz",
    path: "assets/songs/Google Vs FB .mp3",
  },
  {
    name: "Zindagi",
    singerName: "Sucha Yaar",
    path: "assets/songs/Zindagi.mp3",
  },
  {
    name: "Swag",
    singerName: "Sucha Yaar",
    path: "assets/songs/Swag.mp3",
  },
  {
    name: "Sohna Koi Nahi",
    singerName: "Gurnam Bhullar",
    path: "assets/songs/Sohna Koi Nahi.mp3",
  },
  {
    name: "Saah",
    singerName: "Sucha Yaar",
    path: "assets/songs/Saah.mp3",
  },
  {
    name: "Lutaf",
    singerName: "Sucha Yaar",
    path: "assets/songs/Lutaf.mp3",
  },
  {
    name: "Love Me Or Hate Me",
    singerName: "Sidhu Moosewala",
    path: "assets/songs/Love Me Or Hate.mp3",
  },
  {
    name: "Its True",
    singerName: "Sucha Yaar",
    path: "assets/songs/Its True.mp3",
  },
  {
    name: "Tutti Yaari",
    singerName: "Inder Chahal",
    path: "assets/songs/Inder Chahal.mp3",
  },
  {
    name: "I Swear",
    singerName: "Sucha Yaar",
    path: "assets/songs/I Swear.mp3",
  },
  {
    name: "Hathyar",
    singerName: "Sidhu Moosewala",
    path: "assets/songs/Hathyar.mp3",
  },
];

// Setting default values
audio = new Audio(songs[0]?.path);
cover.setAttribute("src", songs[0]?.img || "assets/img/cover.png");
songName.innerHTML =
  songs[0]?.name?.length > 20
    ? songs[0]?.name?.slice(0, 20) + " ..."
    : songs[0]?.name;
singerName.innerHTML = songs[0]?.singerName || "Unknown";
document.title = "Music Player - " + songs[0]?.name;
let markup = "";
songs.forEach((song, i) => {
  markup += `
  <div class="song df aic jcsb">
      <div class="df aic">
          <img src="${song?.img || "assets/img/cover.png"}" alt="">
          <span>${
            song?.name?.length > 20
              ? song?.name?.slice(0, 20) + " ..."
              : song?.name
          } - ${song?.singerName || "Unknown"}</span>
      </div>
      <ion-icon class="cp" name="play" onclick="playPause(${i})"></ion-icon>
  </div>
`;
});
playList.innerHTML = markup;

// Interval
setInterval(() => {
  seek.value = (audio.currentTime / audio.duration) * 100;
}, 1000);

// Functions
const setSong = (index) => {
  if (audio) {
    audio.pause();
  }
  currentSongIndex = index;
  audio = new Audio(songs[index]?.path);
  cover.setAttribute("src", songs[index]?.img || "assets/img/cover.png");
  songName.innerHTML =
    songs[index]?.name?.length > 20
      ? songs[index]?.name?.slice(0, 20) + "..."
      : songs[index]?.name;
  singerName.innerHTML = songs[index]?.singerName || "Unknown";
  audio.play();
  playBtn.setAttribute("name", "pause-outline");
  cover.classList.add("h-72");
  document.title = "Music Player - " + songs[index]?.name;
  // console.log(Array.isArray(playList?.children));
  Array.from(playList?.children)?.forEach((child, i) => {
    if (index === i) {
      child.children[1].setAttribute("name", "pause");
    } else {
      child.children[1].setAttribute("name", "play");
    }
  });
};

const changeDuration = (e) =>
  (audio.currentTime = (e.value * audio.duration) / 100);

const playPause = (i) => {
  i = i || currentSongIndex;
  currentSongIndex = i;
  if (playList.children[i].children[1].getAttribute("name") === "play") {
    setSong(i);
  } else {
    playList.children[i].children[1].setAttribute("name", "play");
    playBtn.setAttribute("name", "play-outline");
    audio.pause();
  }
};

const prevSong = () => {
  if (currentSongIndex <= 0) {
    currentSongIndex = songs.length - 1;
  } else {
    currentSongIndex--;
  }
  setSong(currentSongIndex);
};

const nextSong = () => {
  if (currentSongIndex >= songs.length - 1) {
    currentSongIndex = 0;
  } else {
    currentSongIndex++;
  }
  setSong(currentSongIndex);
};

const like = () => {
  if (likeBtn.getAttribute("name") === "heart-outline") {
    likeBtn.setAttribute("name", "heart");
    likeBtn.style.color = "red";
  } else {
    likeBtn.setAttribute("name", "heart-outline");
    likeBtn.style.color = "white";
  }
};

const showPlayList = () => {
  box.classList.toggle("fdc");
  box.classList.toggle("aic");
  playList.classList.toggle("dn");
};

// Event Listeners
window.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    playPause();
  } else if (e.code === "ArrowRight") {
    nextSong();
  } else if (e.code === "ArrowLeft") {
    prevSong();
  }
});

audio.addEventListener("ended", () => {
  nextSong();
});
