function toTop() {
    const btnScrollToTop = document.querySelector("#btnScrollToTop");
    btnScrollToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

}

function god() {
    let max = 100;
    let min = 0;
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    random = random + "%";
    document.getElementById('subprogress').style.width = random;
}