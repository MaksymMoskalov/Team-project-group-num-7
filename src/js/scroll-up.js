let calcScrollValue = () => {
    let scrollUp = document.getElementById("scroll-up");
    let scrollValue = document.getElementById("scroll-up-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - 
                     document.documentElement.clientHeight;
    let scrollItm = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollUp.style.display = "grid";
    } else {
        scrollUp.style.display = "none";
    }

    scrollUp.addEventListener("click", () => {
document.documentElement.scrollTop = 0;
    })

    scrollUp.style.background = 
    `conic-gradient(#4f2ee8 ${scrollItm}%, #d7d7d7 ${scrollItm}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;