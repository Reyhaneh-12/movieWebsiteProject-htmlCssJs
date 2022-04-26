const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movieList");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        const viewItems = Math.floor(window.innerWidth / 300);
        console.log(viewItems)
        clickCounter++;

        if(viewItems + clickCounter <= itemNumber) {
            movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 330
            }px)`;
        }
        else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

/* Toggle */
const ball = document.querySelector(".toggleBall");
const items = document.querySelectorAll(".navbar, .itemMenu, .textProfile span, .textProfile i, .toggleIcon, .toggleBall, .sidebar, .sidebar i, .container, .movieListContainer h1, .movieListItem");

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
})
