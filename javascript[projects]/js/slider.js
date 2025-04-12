let flag = 2;

const controller = (x) => {
    flag = flag + x;
    slideShow(flag)
}

const slideShow = (num) => {
    let slide = document.getElementsByClassName('showslider');
    if (slide == num.length) {
        flag = 0;
        num = 0
    }
    if (slide < 0) {
        flag = slide.length - 1;
        num = slide.length - 1;
    }
    for (let y of slide) {
        y.style.display = 'none';
    }
    slide[num].style.display = 'block';
}
slideShow(flag)