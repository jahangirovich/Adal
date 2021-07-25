(function () {
    var btn = document.querySelectorAll('.burger-show');
    let burgerOpen = document.querySelector(".burger-menu");
    let clicked = false
    btn.forEach(function (e) {
        e.onclick = function (event) {
            if (!clicked) burgerOpen.classList.add("burger-open")
            else burgerOpen.classList.remove("burger-open")
            clicked = !clicked
        }
    })
})()