window.player = {

    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    audio: document.querySelector("audio"),
    audioData: audios, 
    currentAudio: {},
    start() {

        this.currentAudio = this.audioData[0];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerHTML = this.currentAudio.title;
        this.artist.innerHTML = this.currentAudio.artist
        this.audio.src = path(this.currentAudio.file)

        this.audio.addEventListener("ended",()=>{})
    }

}


