import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'


const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector("#muteButton");


const player = new MediaPlayer({
    el: video, plugins: [
        new AutoPlay(), new AutoPause(), new Ads()
    ]
});
button.onclick = () => player.togglePlay();
muteButton.onclick = () => {
    if (player.media.muted) {

        player.unmute();
    } else {
        player.mute();
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error(error.message)

    })
}