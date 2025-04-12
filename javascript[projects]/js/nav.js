let autoAdd = document.getElementById('autoAdd')
autoAdd.addEventListener('click', function () {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show')
})

const windowWidth = window.innerWidth;
const navbarNav = document.querySelectorAll('.navbar-nav > li');
const moreBtnUl = document.getElementById('moreBtnUl');
const getAllList = () => {
    let allwidthLi = 0;
    for (let x = 0; x < navbarNav.length; x++) {
        allwidthLi += $(navbarNav[x]).outerWidth();
        if (allwidthLi > windowWidth) {
            const cln = navbarNav[x].cloneNode(true);
            $(moreBtnUl).append(cln)
            $(navbarNav[x]).remove();
        } else if (allwidthLi > windowWidth) {
            const cln = navbarNav[x].cloneNode(true);
            $(moreBtnUl).append(cln)
            $(navbarNav[x]).remove();
        }
    }
}
getAllList()