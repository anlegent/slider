let previous = document.getElementById("previous")
function previousImg() {
    const image = document.getElementById("image")
    image.srcset = "a"
}
previous.addEventListener("click", previousImg)

let next = document.getElementById("next")
function nextImage() {
    const image = document.getElementById("image")
    image.srcset = "a"
}
next.addEventListener("click", nextImage)