let count = 2;
const images = ["https://picsum.photos/id/59/300", "https://picsum.photos/id/120/300", "https://picsum.photos/id/184/300", "https://picsum.photos/id/106/300", "https://picsum.photos/id/167/300"]

const previous = document.getElementById("previous")
previous.addEventListener("click", previousImg)
function previousImg() {
    count--
    const image = document.getElementById("image")
    image.srcset = images[count]
}

const next = document.getElementById("next")
next.addEventListener("click", nextImg)
function nextImg() {
    count++
    const image = document.getElementById("image")
    image.srcset = images[count]
}