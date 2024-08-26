const image = document.getElementById("image");
const ImgButton = document.getElementById("ImgButton");
const ThemeButton = document.getElementById("ThemeButton");
let a = true;

ImgButton.addEventListener("click", () => {
    if(a) {
        image.src = "image.png";
    } else {
        image.src = "image2.png";
    }
    a = !a;
});

ThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("DarkMode")
})