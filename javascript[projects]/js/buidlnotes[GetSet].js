let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function () {
  let addTxt = document.getElementById('addTxt');
  let addVal = addTxt.value;
  let notesVal = localStorage.getItem('notesVal');
  if (notesVal === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notesVal);
  }
  notesObj.push(addVal);
  notesObj = localStorage.setItem('notesVal', JSON.stringify(notesObj));
  addTxt.value = '';
  showDataHandler()
  
})

let showBtn = document.getElementById('addBtnSm');

function showDataHandler() {
  let notesVal = JSON.parse(localStorage.getItem('notesVal'));
  let addTxt = document.getElementById('notes');
  let ulDom = $(`<ul></ul>`);
  notesVal.forEach((elem) => {
    const liDom = $(`<li>${elem}</li>`);
    $(ulDom).append($(liDom)[0]);
  })
  $(addTxt).append(ulDom);
}

showBtn.addEventListener('click', function () {
  showDataHandler()
})

showDataHandler()

function resetfuntion() {

}
resetfuntion()