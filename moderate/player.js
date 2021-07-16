
import audios from "./data";
import {path} from "./utils";

export default player = {

    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    currentPlay: 0,
    start() {
        this.update();
        this.audio.addEventListener("ended", () => this.next());
    },
    next() {
        this.currentPlay++;

        //verifica se esta na ultima musica
        if(this.currentPlay === this.audioData.length){
            this.restart();
        }

        this.update();
    },
    update() {
        this.currentAudio = this.audioData[this.currentPlay];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerHTML = this.currentAudio.title;
        this.artist.innerHTML = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file)
    },
    restart() {
        this.currentPlay = 0;
            this.update();
    }
}

