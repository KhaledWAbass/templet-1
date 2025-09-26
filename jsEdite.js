let up = document.querySelector(".UP");
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
    let top = document.documentElement.scrollTop;
    el.style.width = `${(top / height) * 100}%`
// =============================================
if (top > 700) {
    up.style.display = "block";
}else {
    up.style.display = "none";
}
})
up.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})