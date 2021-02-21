var TOG;
var CHK = localStorage.getItem("isBoundaryDisplayed") == "true" ? false : true;
function toggleBorder() {
    !TOG && document.body.appendChild((TOG = document.createElement("style")));
    (CHK = !CHK)
        ? (TOG.innerHTML = `*{box-shadow: 0 0 0 1px cyan}`)
        : (TOG.innerHTML = "");
    localStorage.setItem("isBoundaryDisplayed", CHK);
}

toggleBorder();

const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
});
