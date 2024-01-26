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

audio.ontimeupdate = function() {
    const currentTimeValue = audio.currentTime;
    const durationValue = audio.duration;
    seek.value = (currentTimeValue / durationValue) * 100;
    currentTime.textContent = formatTime(currentTimeValue);
};

audio.onloadedmetadata = function() {
    duration.textContent = formatTime(audio.duration);
};

seek.onchange = function() {
    const seekValue = seek.value;
    const durationValue = audio.duration;
    audio.currentTime = (seekValue / 100) * durationValue;
};

volume.onchange = function() {
    audio.volume = volume.value / 100;
};

play.onclick = function() {
    audio.play();
};

pause.onclick = function() {
    audio.pause();
};

prev.onclick = function() {
    const currentSrc = audio.src;
    const currentIndex = currentSrc.lastIndexOf('/') + 1;
    const currentFileName = currentSrc.slice(currentIndex);
    const files = ['music1.mp3', 'music2.mp3', 'music3.mp3'];
    const nextIndex = files.indexOf(currentFileName) - 1;
    if (nextIndex >= 0) {
        audio.src = `/music/${files[nextIndex]}`;
        audio.play();
    }
};

next.onclick = function() {
    const currentSrc = audio.src;
    const currentIndex = currentSrc.lastIndexOf('/') + 1;
    const currentFileName = currentSrc.slice(currentIndex);
    const files = ['music1.mp3', 'music2.mp3', 'music3.mp3'];
    const nextIndex = files.indexOf(currentFileName) + 1;
    if (nextIndex < files.length) {
        audio.src = `/music/${files[nextIndex]}`;
        audio.play();
    }
};

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}