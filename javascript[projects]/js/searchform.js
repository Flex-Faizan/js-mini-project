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


obj.forEach((elem) => {
  const table = document.getElementById('table');
  const appendTr = $(`<tr>
          <td>${elem.Name}</td>
          <td>${elem.Degree}</td>
          <td>${elem.profession}</td>
        </tr>`)[0]
  table.append(appendTr)
});


const serachName = () => {
  const filter = document.getElementById('filterName').value.toUpperCase();
  const getTrValue = filter.getElementsByTagName('tr');
  for (let i = 1; i < getTrValue.length; i) {
    console.log(getTrValue)
  }
}