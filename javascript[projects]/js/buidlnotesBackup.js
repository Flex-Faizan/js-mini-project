showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  notesObj.value = '';
  showNotes()
})

// show notes
function showNotes() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Title ${index+1}</h5>
    <p class="card-text">${element}</p>
    <button class="btn btn-primary btn-sm" id="${index}" onclick="deleteNotes(this.id)" >Delete</button>
  </div>
</div>`
  });
  let elemNotes = document.getElementById('notes');
  if (notesObj != 0) {
    elemNotes.innerHTML = html;
  } else {
    elemNotes.innerHTML = `There is no elemnet`
  }
}

// Delete Notes
function deleteNotes(index) {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
}