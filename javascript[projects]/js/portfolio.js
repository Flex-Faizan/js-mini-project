"use strict";
const mainObj = [{
        "id": 1,
        "mainUrl": 'img/portfolio/portfolio-1.jpg',
        "title": 'App 1',
        "category": "App",
        "subUrl": 'img/portfolio/portfolio-1.jpg',
    },
    {
        "id": 2,
        "mainUrl": 'img/portfolio/portfolio-2.jpg',
        "title": 'Web 1',
        "category": "Web",
        "subUrl": 'img/portfolio/portfolio-2.jpg',
    },
    {
        "id": 3,
        "mainUrl": 'img/portfolio/portfolio-3.jpg',
        "title": 'Card 1',
        "category": "Card",
        "subUrl": 'img/portfolio/portfolio-3.jpg',
    },
    {
        "id": 4,
        "mainUrl": 'img/portfolio/portfolio-2.jpg',
        "title": 'Web 1',
        "category": "Web",
        "subUrl": 'img/portfolio/portfolio-2.jpg',
    },
    {
        "id": 5,
        "mainUrl": 'img/portfolio/portfolio-1.jpg',
        "title": 'App 1',
        "category": "App",
        "subUrl": 'img/portfolio/portfolio-1.jpg',
    },
    {
        "id": 6,
        "mainUrl": 'img/portfolio/portfolio-3.jpg',
        "title": 'Card 1',
        "category": "Card",
        "subUrl": 'img/portfolio/portfolio-3.jpg',
    },
    {
        "id": 7,
        "mainUrl": 'img/portfolio/portfolio-4.jpg',
        "title": 'App 1',
        "category": "App",
        "subUrl": 'img/portfolio/portfolio-4.jpg',
    },
    {
        "id": 8,
        "mainUrl": 'img/portfolio/portfolio-5.jpg',
        "title": 'Card 1',
        "category": "Card",
        "subUrl": 'img/portfolio/portfolio-5.jpg',
    },
    {
        "id": 9,
        "mainUrl": 'img/portfolio/portfolio-6.jpg',
        "title": 'Web 1',
        "category": "Web",
        "subUrl": 'img/portfolio/portfolio-6.jpg',
    },
]

let currentObject = {};

// Crete Column Div Start
const createColumn = (mainObject) => {
    const portfoliocontainer = document.getElementById('portfolio_container');
    portfoliocontainer.innerHTML = '';
    mainObject.forEach((element) => {
        portfoliocontainer.innerHTML += ` 
    <div class="col-lg-4 col-md-6 portfolio-item filter-${element.category}">
        <div class="portfolio-wrap">
            <img src="${element.mainUrl}" class="img-fluid" alt="">
            <div class="portfolio-info">
                <h4>${element.title}</h4>
                <p>${element.category}</p>
            </div>
            <div class="portfolio-links">
                <button type="button" onclick="modalPopUp(${element.id})" class="portfolio-lightbox" title="App 1"><i class="bi bi-plus-circle-dotted" ></i></button>
                <button  title="More Details"><i class="bi bi-link"></i></button>
            </div>
        </div>
    </div>`
    });
}
createColumn(mainObj);
// Crete Column Div End
// Element Category Filter From Json Object Start
const filterSelction = () => {
    const filterBtn = document.querySelectorAll('#portfolio-flters > li');
    filterBtn.forEach((ele, i) => {
        filterBtn[i].addEventListener("click", function () {
            const targetData = this.getAttribute('data-filter');
            let dataFilter = [];
            let currentCategory = "*";
            if (targetData !== "*") {
                currentCategory = targetData.split('-')[1]
                dataFilter = mainObj.filter(element => element.category == currentCategory);
            } else {
                dataFilter = mainObj;
            }
            createColumn(dataFilter);
        });
    });
}
// Element Category Filter From Json Object End

// Find Unique Keys from json Object Start
const getUniqueKey = (mainObj) => {
    const uniqueID = [...new Set(mainObj.map(item => item.category))];
    uniqueID.unshift("All");
    return uniqueID;
}
const ids = getUniqueKey(mainObj, 'category');;
// Find Unique Keys from json Object End

// Create Dynamic Li Start
const createLi = () => {
    let createUl = document.getElementById('portfolio-flters');
    ids.forEach((element, index) => {
        if (index == 0) {
            const liElement = $(`<li data-filter="*" class="filter-active">${element}</li>`)[0]
            createUl.append(liElement);
        } else {
            const liElement = $(`<li data-filter="filter-${element}">${element}</li>`)[0];
            createUl.append(liElement)
        }
    });
    filterSelction(mainObj)
}
createLi(ids);
// Create Dynamic Li End
// Modal Pop Up Start
const modalPopUp = (idModal) => {
    currentObject = mainObj.find((elem) => elem.id === idModal)
    modalDOM()
    // let popUpdiv = document.getElementById('popUp');
    // popUpdiv.style.display = 'flex';
}
// Modal Pop Up End

// Modal Pop Up Close Icon Start
const modalCloseBtn = () => {
    let popUpdiv = document.getElementById('popUp');
    if (popUpdiv.style.display !== "none") {
        popUpdiv.style.display = "none";
    } else {
        popUpdiv.style.display = "flex";
    }
}
// Modal Pop Up Close Icon End

// Create Modal Dom Start
const modalDOM = () => {
    const {
        mainUrl,
        title,
    } = currentObject

    const maniPulateDOm = $(`<div class="custamModal" id="popUp">
        <div class="modalInner">
        <i class="bi bi-x-lg" id="modalCloseBtn" onclick="modalCloseBtn()"></i>
        <img id="mainImg" src="${mainUrl}" alt="img" class="img-fluid">
        <div class="iconArea">
        <i class="prevBtn bi bi-chevron-left icon" onclick="prevPopUp()"></i>
        <i class="nextBtn bi bi-chevron-right icon" onclick="nextPopUp()"></i>
        </div>
        <div class="title">
        <h3 class="caption" id="title">${title}</h3>
        </div>
        </div>
        </div>`)[0];
    const openModal = document.querySelector('#popUp');
    if (!openModal) {
        document.querySelector('#portfolio').append(maniPulateDOm)
        maniPulateDOm.style.display = "flex";
    } else {
        openModal.style.display = "flex";
    }
};

// Update Modal Dom Start
const modalDOMUpdate = () => {
    const {
        mainUrl,
        title,
    } = currentObject;

    const popUp = document.querySelector('#popUp');
    popUp.querySelector('#title').textContent = title;
    popUp.querySelector('#mainImg').src = mainUrl;
};
// Update Modal Dom End

//  For Next Button Start
const nextPopUp = () => {
    // condition ? when is True : otherwise false
    const _id = (currentObject.id + 1) === mainObj.length ? 1 : currentObject.id + 1;
    currentObject = mainObj.find((elem) => elem.id === _id);
    modalDOMUpdate();
}
//  For Next Button End
//  For Preview Button Strat
const prevPopUp = () => {
    const _id = (currentObject.id - 1) === 0 ? mainObj.length : currentObject.id - 1;
    currentObject = mainObj.find((elem) => elem.id === _id);
    modalDOMUpdate();
}
//  For Preview Button End
// 