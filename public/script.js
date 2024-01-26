const player = document.querySelector('.player');
const audio = document.querySelector('.audio');
const prev = player.querySelector('.prev');
const play = player.querySelector('.play');
const pause = player.querySelector('.pause');
const next = player.querySelector('.next');
const seek = player.querySelector('.seek');
const volume = player.querySelector('.volume');
const currentTime = player.querySelector('.current-time');
const duration = player.querySelector('.duration');
const trackUpload = document.getElementById('trackUpload');
const uploadButton = document.querySelector('.upload');


const playlist = [''];
let currentSongIndex = 0;

audio.ontimeupdate = function () {
    const currentTimeValue = audio.currentTime;
    const durationValue = audio.duration;
    seek.value = (currentTimeValue / durationValue) * 100;
    currentTime.textContent = formatTime(currentTimeValue);
};

audio.onloadedmetadata = function () {
    duration.textContent = formatTime(audio.duration);
};

seek.onchange = function () {
    const seekValue = seek.value;
    const durationValue = audio.duration;
    audio.currentTime = (seekValue / 100) * durationValue;
};

volume.onchange = function () {
    audio.volume = volume.value / 100;
};

play.onclick = function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
};

prev.onclick = function () {
    playSongByIndex(currentSongIndex - 1);
};

next.onclick = function () {
    playSongByIndex(currentSongIndex + 1);
};

uploadButton.onclick = function () {
    trackUpload.click();
};

trackUpload.onchange = function () {
    uploadSong(trackUpload.files);
};

audio.onended = function () {
    playSongByIndex(currentSongIndex + 1);
};

function playSongByIndex(index) {
    if (index >= 0 && index < playlist.length) {
        currentSongIndex = index;
        audio.src = `/music/${playlist[currentSongIndex]}`;
        audio.play();
    }
}

function uploadSong(files) {
    const file = files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(message => {
                console.log(message);
                playlist.push(file.name);
                if (audio.paused) {
                    playSongByIndex(playlist.indexOf(file.name));
                }
            })
            .catch(error => console.error('Error uploading song:', error));
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}
