const path = function (file) {
    return `file/${file}`
}

<<<<<<< HEAD
const secondsToMinutes = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
}

export {
    path,
    secondsToMinutes
=======
export {
    path
>>>>>>> 1b50fd3ad02a88885cdf8673cc37d5d818e01fa8
}