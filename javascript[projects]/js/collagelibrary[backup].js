function Book(name, auther, type) {
    this.name = name;
    this.auther = auther;
    this.type = type;
}
// display contructer
function Dispaly() {}
// add book objects using prototype
Dispaly.prototype.add = function (book) {
    let stringUi = `<tr>
    <td>${book.name}</td>
    <td>${book.auther}</td>
    <td>${book.type}</td>
  </tr>`
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML += stringUi
}
// Implement the clear function
Dispaly.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset()
}
// Implement the validate function
Dispaly.prototype.validate = function (book) {
    if (book.name.length < 2 || book.auther.length < 2) {
        return false;
    } else {
        return true;
    }
}

// Implement the show function
Dispaly.prototype.show = function (displayMessage) {
    let message = document.getElementById('message')
    message.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Message!</strong> ${displayMessage}
                         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
            </button>
                </div>`
    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}
// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value
    } else if (programming.checked) {
        type = programming.value
    } else if (cooking.checked) {
        type = cooking.value
    }

    let book = new Book(name, author, type);
    let display = new Dispaly()
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success');
    } else {
        display.show('danger');
    }
}