//  showNotes();

// this method check the getItem data and setItem
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
  const addTxt = document.getElementById('addTxt');
  const getLocalData = localStorage.getItem('getLocalData');
  if (getLocalData === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(getLocalData);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem('getLocalData', JSON.stringify(notesObj))
  notesObj.value = "";
  showNotes();
})
// This funtion call to card box and showing data
const showNotes = () => {
  const getLocalData = localStorage.getItem('getLocalData');
  if (getLocalData === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(getLocalData);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Title ${index+1}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary btn-sm" id="${index}"  onclick="deleteData(this.id)" >Delete</button>
    </div>
  </div>`
  });
  const appenNotesID = document.getElementById('notes');
  if (notesObj != 0) {
    appenNotesID.innerHTML = html;
  } else {
    appenNotesID.innerHTML = 'There is no content'
  }
}

const deleteData = (index) => {
  const getLocalData = localStorage.getItem('getLocalData');
  if (getLocalData === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(getLocalData);
  }
  notesObj.splice(index, 1); // this funtion use to delete elemnet from index
  localStorage.setItem('getLocalData', JSON.stringify(notesObj))
  showNotes()
}