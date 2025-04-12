const toggleHandler = () => {
    let collapse = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener('click', function () {
            let contentItem = this.nextElementSibling.firstElementChild;
            if (contentItem.style.display === 'block') {
                contentItem.style.display = "none";
                heightRemove(contentItem);
            } else {
                contentItem.style.display = "block";
            }

            $($(this.nextElementSibling).parent()[0]).toggleClass('open')
            getOpenClass();
            document.getElementById('print').innerHTML = `li is ${contentItem.childElementCount}`
        })
    }

}
const getRestHeightHandler = () => {
    let wrapperHeight = document.getElementById('sidebar-wrapper')
    let wrappertotalHgt = wrapperHeight.offsetHeight;
    let navbar = document.getElementById('topheader');
    let navHeight = navbar.offsetHeight;
    let everyLi = document.getElementsByClassName('collapsible')
    let allLitotal = 0;
    for (let i = 0; i < everyLi.length; i++) {
        const totalEveryLiHeigt = everyLi[i].offsetHeight;
        allLitotal = allLitotal + totalEveryLiHeigt;
    }
    let afternavbarminusheight = (wrappertotalHgt - navHeight)
    let overallgetWrapHeight = (afternavbarminusheight - allLitotal)
    return overallgetWrapHeight
}

const applyOnFirstLoadingHandler = () => {
    toggleHandler();
    const _height = getRestHeightHandler();
    const _navFirstElement = document.querySelector('#menu > li');
    const _innerChild = _navFirstElement.querySelector('.inner-child')
    $(_innerChild).css({
        'height': _height
    })
    $(_navFirstElement).addClass('open')
}

applyOnFirstLoadingHandler();

function getOpenClass() {
    let openElements = document.querySelectorAll('.open');
    let totalOpenHeight = getRestHeightHandler();
    const _singleElemHeight = (totalOpenHeight / openElements.length);
    openElements.forEach((elem) => {
        $(elem.querySelector('.inner-child')).css({
            'height': _singleElemHeight
        })
    })
}

const heightRemove = (element) => {
    element.parentElement.style.height = '';
    console.log(element)
}

const printElement = () => {
    let collapse2 = document.getElementsByClassName('.collapsible');
    // for (let iz = 0; iz < collapse2.length; iz++) {
    //     collapse2[i].addEventListener('click', function () {
    //         console.log(collapse2.children[iz])
    //     })
    // }
    console.log(collapse2)
    // document.getElementById('print').innerHTML = collapse2
}