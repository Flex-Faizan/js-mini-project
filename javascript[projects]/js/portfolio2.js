"use strict";
const mainObjTwo = [{
        "id": 1,
        "mainUrl": 'img/portFolio1.jpg',
        "title": 'App 1',
        "category": "App",
        "subUrl": 'img/portFolio1.jpg',
    },
    {
        "id": 2,
        "mainUrl": 'img/portFolio2.jpg',
        "title": 'Web 1',
        "category": "Web",
        "subUrl": 'img/portFolio2.jpg',
    },
    {
        "id": 3,
        "mainUrl": 'img/portFolio3.jpg',
        "title": 'Card 1',
        "category": "Card",
        "subUrl": 'img/portFolio3.jpg',
    },
    {
        "id": 4,
        "mainUrl": 'img/portFolio2.jpg',
        "title": 'Web 1',
        "category": "Web",
        "subUrl": 'img/portFolio2.jpg',
    },
    {
        "id": 5,
        "mainUrl": 'img/portFolio1.jpg',
        "title": 'App 1',
        "category": "App",
        "subUrl": 'img/portFolio1.jpg',
    },
    {
        "id": 6,
        "mainUrl": 'img/portFolio3.jpg',
        "title": 'Card 1',
        "category": "Card",
        "subUrl": 'img/portFolio3.jpg',
    },
    {
        "id": 7,
        "mainUrl": 'img/portFolio5.jpg',
        "title": 'App 1',
        "category": "App",
        "subUrl": 'img/portFolio5.jpg',
    },
    {
        "id": 8,
        "mainUrl": 'img/portFolio2.jpg',
        "title": 'Card 1',
        "category": "Card",
        "subUrl": 'img/portFolio2.jpg',
    },
    {
        "id": 9,
        "mainUrl": 'img/portFolio4.jpg',
        "title": 'Web 1',
        "category": "Web",
        "subUrl": 'img/portFolio4.jpg',
    },
]

let currentObjectTwo = {};

// Crete Column Div Start
const createColumnTwo = (mainObject) => {
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
                <button type="button" onclick="modalPopUpTwo(${element.id})" class="portfolio-lightbox" title="App 1"><i class="bi bi-plus-circle-dotted" ></i></button>
                <button  title="More Details"><i class="bi bi-link"></i></button>
            </div>
        </div>
    </div>`

    });
}
createColumnTwo(mainObjTwo);
// Crete Column Div End
// Element Category Filter From Json Object Start
const filterSelctionTwo = () => {
    const filterBtn = document.querySelectorAll('#portfolio-flters > li');
    filterBtn.forEach((ele, i) => {
        filterBtn[i].addEventListener("click", function () {
            const targetData = this.getAttribute('data-filter');
            let dataFilter = [];
            let currentCategory = "*";
            if (targetData !== "*") {
                currentCategory = targetData.split('-')[1]
                dataFilter = mainObjTwo.filter(element => element.category == currentCategory);
            } else {
                dataFilter = mainObjTwo;
            }
            createColumnTwo(dataFilter);
        });
    });
}
// Element Category Filter From Json Object End

// Find Unique Keys from json Object Start
const getUniqueKeyTwo = (mainObjTwo) => {
    const uniqueID = [...new Set(mainObjTwo.map(item => item.category))];
    uniqueID.unshift("All");
    return uniqueID;
}
const idsTwo = getUniqueKeyTwo(mainObjTwo, 'category');;
// Find Unique Keys from json Object End

// Create Dynamic Li Start
const createLiTwo = () => {
    let createUl = document.querySelector('#portfolio-flters');
    idsTwo.forEach((element, index) => {
        if (index == 0) {
            const liElement = $(`<li data-filter="*" class="filter-active">${element}</li>`)[0]
            createUl.append(liElement);
        } else {
            const liElement = $(`<li data-filter="filter-${element}">${element}</li>`)[0];
            createUl.append(liElement)
        }
    });
    filterSelctionTwo(mainObjTwo)
}
createLiTwo(idsTwo);
// Create Dynamic Li End
// Modal Pop Up Start
const modalPopUpTwo = (idModal) => {
    currentObjectTwo = mainObjTwo.find((elem) => elem.id === idModal)
    modalDOMTwo()
    // let popUpdiv = document.getElementById('popUp');
    // popUpdiv.style.display = 'flex';
}
// Modal Pop Up End

// Modal Pop Up Close Icon Start
const ModalCloseBtnTwo = () => {
    let popUpdiv = document.getElementById('popUp');
    if (popUpdiv.style.display !== "none") {
        popUpdiv.style.display = "none";
    } else {
        popUpdiv.style.display = "flex";
    }
}
// Modal Pop Up Close Icon End

// Create Modal Dom Start
const modalDOMTwo = () => {
    const {
        mainUrl,
        title,
    } = currentObjectTwo


    const maniPulateDOmTwo = $(`<div class="custamModal" id="popUp">
        <div class="modalInner">
        <i class="bi bi-x-lg" id="ModalCloseBtnTwo" onclick="ModalCloseBtnTwo()"></i>
        <img id="mainImg" src="${mainUrl}" alt="img" class="img-fluid">
        <div class="iconArea">
        <i class="prevBtn bi bi-chevron-left icon" onclick="prevPopUpTwo()"></i>
        <i class="nextBtn bi bi-chevron-right icon" onclick="nextPopUpTwo()"></i>
        </div>
        <div class="title">
        <h3 class="caption" id="title">${title}</h3>
        </div>
        </div>
        </div>`)[0];
    const openModalTwo = document.querySelector('#popUp');
    if (!openModalTwo) {
        document.querySelector('#portfolio').append(maniPulateDOmTwo)
        maniPulateDOmTwo.style.display = "flex";
    } else {
        openModalTwo.style.display = "flex";
    }
};

// Update Modal Dom Start
const modalDOMUpdateTwo = () => {
    const {
        mainUrl,
        title,
    } = currentObjectTwo;

    const popUp = document.querySelector('#popUp');
    popUp.querySelector('#title').textContent = title;
    popUp.querySelector('#mainImg').src = mainUrl;

};
// Update Modal Dom End

//  For Next Button Start
const nextPopUpTwo = () => {
    // if (currentObjectTwo = mainObjTwo.length > 0) {
    //     currentObjectTwo.id + 1
    // }
    const _id = (currentObjectTwo.id + 1) === mainObjTwo.length ? 1 : currentObjectTwo.id + 1
    currentObjectTwo = mainObjTwo.find((elem) => elem.id === _id);
    modalDOMUpdateTwo();
}
//  For Next Button End
//  For Preview Button Strat
const prevPopUpTwo = () => {
    const _id = (currentObjectTwo.id - 1) === 0 ? mainObjTwo.length : currentObjectTwo.id - 1;
    currentObjectTwo = mainObjTwo.find((elem) => elem.id === _id);
    modalDOMUpdateTwo();
}
//  For Preview Button End
// 