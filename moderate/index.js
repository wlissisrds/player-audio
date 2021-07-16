import player from "./player";

const path = function (file) {
    return `file/${file}`
}

window.addEventListener("load", player.start());