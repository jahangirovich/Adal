(function () {
    const $ = (el) => {
        return document.querySelector(el)
    }
    const $_ = (el) => {
        return document.querySelectorAll(el)
    }
    try {
        $('.message__inner .removeIcon').addEventListener('click', function () {
            $('.message_remove_content').style = "transform: scale(1)";
            $('.profile_cards_category_tours_recent').style = "max-height: 100px;overflow-y: hidden";
            $_('.profile_cards_category')[1].style = "overflow-y: unset";
        })
        $_('.btns button')[1].addEventListener('click', function (e) {
            $('.message_remove_content').style = "transform: scale(0)";
            $('.profile_cards_category_tours_recent').style = "max-height: auto;overflow-y: unset";
            $_('.profile_cards_category')[1].style = "overflow-y: scroll";
        });

        const { nav, clickedItem } = {
            nav: $_('.profile_navbar_settings'),
            clickedItem: {}
        };
        nav.forEach((e) => {
            clickedItem[e] = false
            e.addEventListener('click', function (e) {
                const transforms = {
                    scale: clickedItem[e] ? "transform: scale(0)" : "transform: scale(1)",
                    rotate: clickedItem[e] ? "transform: rotate(0deg)" : "transform: rotate(180deg)"
                }
                $('.hidden_menu').style = transforms['scale'];
                $('.profile_navbar_settings_arrow-down').style = transforms['rotate']
                clickedItem[e] = !clickedItem[e]
            });
        })
    }
    catch (e) {
        console.log(e);
    }
})();
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
})();