const togglerHandler = () => {
    let coll = document.getElementsByClassName('collapsible');
    Array.from(coll).forEach(elem => {
        elem.addEventListener('click', () => {
            let collElement = elem.nextElementSibling.firstElementChild;
            if (collElement.style.display === "block") {
                collElement.style.display = "none";
                removeHeight(collElement)
            } else {
                collElement.style.display = "block"
            }

        })

    });
}


const getRestHeightHandler = () => {
    let wrapper = document.getElementById('wrapper')
    let wrapperHeight = wrapper.offsetHeight;
    let collapse = document.getElementsByClassName('collapsible');
    let getLi = 0;
    // 1
    Array.from(collapse).forEach((elem, i) => {
        let getCollapseHeight = elem.offsetHeight;
        getLi = getLi + getCollapseHeight
    })
    // 2
    // for (let i = 0; i < collapse.length; i++) {
    //     let getCollapseHeight = collapse[i].offsetHeight;
    //     getLi = getLi + getCollapseHeight
    // }
    let getFinalHeight = (wrapperHeight - getLi)
    return getFinalHeight
}
getRestHeightHandler()

const applyFirstHandler = () => {
    togglerHandler();
    let heightHandler = getRestHeightHandler();
    let getfirstLiForOpencls = document.querySelector('#menu > li');
    let innerChildCls = getfirstLiForOpencls.querySelector('.inner-child');
    innerChildCls.style.height = heightHandler + "px";
    getfirstLiForOpencls.classList.add('open')
}
applyFirstHandler()

const removeHeight = (elem) => {
    elem.parentElement.style.height = ''
}
const getOpnClass = () => {
    let openCls = Array.from(document.getElementsByClassName('open'));
    let applyFirstHandlerfun = getRestHeightHandler()
    let remainingSingleElemHeight = (applyFirstHandlerfun / openCls.length);
    openCls.forEach((ele) => {
        ele.getElementsByClassName('inner-child').style.height = remainingSingleElemHeight;
    })

    let getOpencls = document.getElementsByClassName('inner-child');
    Array.from(getOpencls).forEach((elem) => {
        elem.parentElement.classList.add('open')
    })
    let applhgt = document.getElementsByClassName('inner-child');
    Array.from(applhgt).forEach((elm) => {
        elm.style.height = remainingSingleElemHeight
    })
}

// getOpnClass()

let parentLink = document.querySelectorAll(".collapsible");
let arrayList = Array.from(parentLink);
arrayList.forEach((ele) => {
    ele.addEventListener("click", getOpnClass);

})
