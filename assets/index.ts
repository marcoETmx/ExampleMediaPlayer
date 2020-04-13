import MediaPlayer from '@marcoetmx/mediaplayer';
import AutoPlay from '@marcoetmx/mediaplayer/lib/AutoPlay'
import AutoPause from '@marcoetmx/mediaplayer/lib/AutoPause'
import Ads from '@marcoetmx/mediaplayer/lib/plugins/Ads'


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