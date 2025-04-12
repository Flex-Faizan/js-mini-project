const itemInput = document.getElementById('getInput');
const addItem = document.getElementById('addItem');
addItem.addEventListener('click', function (e) {
    e.preventDefault();
    let addInputVal = itemInput.value;
    if (addInputVal.trim() != 0) {
        let todoTask = localStorage.getItem('localTask');
        if (todoTask == null) {
            taskObj = []
        } else {
            taskObj = JSON.parse(todoTask)
        }
        taskObj.push(addInputVal);
        itemInput.value = '';
        localStorage.setItem('localTask', JSON.stringify(taskObj))
    }
    showData()
})

// Show Data From UI

const showData = () => {
    let todoTask = localStorage.getItem('localTask');
    if (todoTask == null) {
        taskObj = []
    } else {
        taskObj = JSON.parse(todoTask)
    }
    let itemList = document.querySelector('.item-list');
    let html = '';
    taskObj.forEach((elm, index) => {
        html += `<div class="item my-3 itemIndex-${index}">
                    <h5 class="item-name text-capitalize">${elm}</h5>
                    <div class="item-icons">
                        <a href="#" class="complete-item mx-2 item-icon" onclick="completeHandler(${index});"><i class="far fa-check-circle"></i></a>
                        <a href="#" class="edit-item mx-2 item-icon" onclick="editItem(${index});"><i class="far fa-edit"></i></a>
                        <a href="#" class="delete-item item-icon" onclick="deletItem(${index});"><i class="far fa-times-circle"></i></a>
                    </div>
                </div>`
    });
    itemList.innerHTML = html;
}
showData()
// For Edit Item 
const editItem = (index) => {
    let saveInput = document.getElementById('saveInput');
    saveInput.value = index;
    const _currentElem = document.querySelector(`.itemIndex-${index}`)
    _currentElem.querySelector('.complete-item').style.display = 'inline-block';
    _currentElem.querySelector('.edit-item').style.display = 'none';
    let todoTask = localStorage.getItem('localTask');
    let taskObj = JSON.parse(todoTask);
    itemInput.value = taskObj[index]
}

const completeHandler = () => {
    let todoTask = localStorage.getItem('localTask');
    let taskObj = JSON.parse(todoTask);
    let saveInput = document.getElementById('saveInput').value;
    taskObj[saveInput] = itemInput.value;
    localStorage.setItem('localTask', JSON.stringify(taskObj))
    showData()
    document.getElementById('getInput').value = '';
}

const deletItem = (index) => {
    let todoTask = localStorage.getItem('localTask');
    let taskObj = JSON.parse(todoTask);
    taskObj.splice(index, 1)
    localStorage.setItem('localTask', JSON.stringify(taskObj))
    showData()
}

// for delete All Item
const delteElem = () => {
    let todoTask = localStorage.getItem('localTask');
    if (todoTask == null) {
        taskObj = []
    } else {
        taskObj = []
    }
    localStorage.setItem('localTask', JSON.stringify(taskObj))
    showData()
}
// for search by name


const serachName = (index) => {
    let seracByName = document.getElementById('seracByName');
    let itemnName = document.querySelectorAll('.item');
    Array.from(itemnName).forEach((item) => {
        let serchName = item.querySelector('.item-name').innerText;
        let seracByNameVal = seracByName.value;
        let regExp = new RegExp(seracByNameVal, 'gi');
        if (serchName.match(regExp)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}