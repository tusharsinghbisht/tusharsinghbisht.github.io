let pointer = document.getElementById("mousepointer")

document.addEventListener("mousemove", e => {
    pointer.style.left = String(e.clientX - 20)+"px";
    pointer.style.top = String(e.clientY - 20)+"px";
})

document.body.addEventListener("mouseleave", () => {
    pointer.style.display = "none"
})
document.body.addEventListener("mouseenter", () => {
    pointer.style.display = "flex"
})