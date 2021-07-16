
import audios from "./data.js";
import { path } from "./utils.js";
import elements from "./playerElements.js";


export default player = {
    audioData: audios,
    currentAudio: {},
    currentPlay: 0,
    isPlaying: false,
    start() {
        //chama os elementos do html
        elements.get.call(this);

        this.update();
        this.audio.addEventListener("ended", () => this.next());
    },
    play() {
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = "pause";
    },
    pause() {
        this.isPlaying = false;
        this.audio.pause();
        this.playPause.innerText = "play_arrow";
    },
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    toggleMute() {
        this.audio.muted = !this.audio.muted;
        this.mute.innerText = this.audio.muted ? "volume_down" : "volume_up";
    },
    next() {
        this.currentPlay++;

        //verifica se esta na ultima musica
        if (this.currentPlay === this.audioData.length) {
            this.restart();
        }

        this.update();
    },
    setVolume(value) {
        this.audio.volume = value / 100;
    },
    setSeek(value) {
        this.audio.currentTime = value;
    },
    update() {
        this.currentAudio = this.audioData[this.currentPlay];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerHTML = this.currentAudio.title;
        this.artist.innerHTML = this.currentAudio.artist;
        elements.createAudioElement.call(this, path(this.currentAudio.file));
        
        //esperar o metadata do audio ser carregado
        //depois chamar actions enviar tempo de duração pra actions
        this.audio.onloadeddata = () => {
            elements.actions.call(this);            
        }
        
        

    },
    restart() {
        this.currentPlay = 0;
        this.update();
    }
}

