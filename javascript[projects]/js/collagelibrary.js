// Grap All the Objects Using Cunstructer Function 
function Book(name, auther, type) {
    this.name = name;
    this.auther = auther;
    this.type = type
}

// Display Cunstructer Function
function Dispaly() {}

const addItem = document.getElementById('addItem')
addItem.addEventListener('click', function (event) {
    event.preventDefault()
    const name = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    let type;
    const fiction = document.getElementById('fiction');
    const programming = document.getElementById('programming');
    const cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    // console.log(type)
    const book = new Book(name, author, type)
    const display = new Dispaly();

    if (display.validation(book)) {
        display.add(book);
        display.clear();
        display.show('success')
    } else {
        display.show('danger')
    }
})


// Add Data In Table
Dispaly.prototype.add = function (book) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML += `<tr>
    <td>${book.name}</td>
    <td>${book.auther}</td>
    <td>${book.type}</td>
  </tr>`
}
// Add Validation
Dispaly.prototype.validation = function (book) {
    if (book.name.length < 2 || book.auther.length < 2) {
        return false;
    } else {
        return true;
    }
}
// After form submission Form is clear
Dispaly.prototype.clear = function () {
    const libraryForm = document.getElementById('libraryForm');
    libraryForm.reset()
}
// showieng the alert messeges
Dispaly.prototype.show = function (displayMessage) {
    const message = document.getElementById('message');
    message.innerHTML +=
        `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);

}