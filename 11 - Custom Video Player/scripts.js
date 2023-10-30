// Get all elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipbtns = player.querySelectorAll('.player__button');

// Build out the functions
function togglePlay() {
    // if(video.paused) {
    //     video.play();
    // }else {
    //     video.pause();
    // }
    const method = (video.paused) ? 'play' : 'pause';
    video[method]();
}

function updateBtn() {
    const icon = (video.paused) ? '▶️':'⏸️';
    toggle.textContent = icon;
}

function skip() {
    // console.log('skipping');
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    // console.log(this.value);
    // console.log(this.name);
}

function handleProgress() {
    let percent =  (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    // console.log(e);
    const scrunTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrunTime;
}

// Hook up the event listener
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);

skipbtns.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
