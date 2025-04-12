const obj = [{
  "Name": "Mark",
  "Degree": "BCA",
  "profession": "Web Designer"
},
{
  "Name": "Larry",
  "Degree": "MBBS",
  "profession": "Gynecologist"
},
{
  "Name": "Jacob",
  "Degree": "B.Tech",
  "profession": "Sofware Enginner"
},
{
  "Name": "Larry",
  "Degree": "MBBS",
  "profession": "Docter"
},
]

const getData = () => {
const myTable = document.getElementById('getData');
obj.forEach((element) => {
  const objData = $(`<tr>
      <td>${element.Name}</td>
      <td>${element.Degree}</td>
      <td>${element.profession}</td>
  </tr>`)[0]
  myTable.append(objData)
});
}

const serachName = () => {
const filter = document.getElementById('name').value.toUpperCase();
const tr = myTable.getElementsByTagName('tr');
for (let i = 1; i < tr.length; i++) {
  let td = tr[i].children;
  if (td.length > 0) {
    let textValue = '';
    for (let x = 0; x < td.length; x++) {
      textValue += td[x].textContent || td[x].innerHTML;
      textValue += ' ';
    }
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
}
getData()