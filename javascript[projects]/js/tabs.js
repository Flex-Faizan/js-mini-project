const tablinks = document.getElementsByClassName('tablinks');
Array.from(tablinks).forEach(e => {
    e.addEventListener('click', (elem) => {
        const id = elem.target.dataset.id;
        if (id) {
            Array.from(tablinks).forEach((tab) => {
                tab.classList.remove('active');
            });
            elem.target.classList.add('active');
            const tabContent = document.querySelectorAll('.tabcontent');
            tabContent.forEach((content) => {
                content.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
});