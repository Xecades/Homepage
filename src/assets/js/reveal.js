const MS_BETWEEN_REVEALS = 100;

function reveal() {
    let targets = document.querySelectorAll(".main .reveal");
    for (let i = 0; i < targets.length; i++) {
        setTimeout(() => {
            targets[i].classList.remove("reveal-hide");
        }, MS_BETWEEN_REVEALS * i);
    }
}

export default reveal;