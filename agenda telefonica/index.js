let agenda = {
    list: [
        {
          title: "",
          number: "",
          
        },
    ]
}





function draw() {
    let table = document.querySelector("#list tbody");
    let str = "";
    for (let i = 0; i < state.list.length; i++) {
      let elem = agenda.list[i];
      if (!elem.title.toLowerCase()) {
        continue;
      }
      if (
        !elem.number.toLowerCase()) {
        continue;
        }
    }
    
      str += `
              <tr>
                  <td>
                    ${elem.title}
                  </td>
                  <td>${state.difficulty[elem.difficulty]}</td>
                  <td>${elem.tags.join(", ")}</td>
                  <td>
                      <button onclick="del(${i})">Delete</button>
                      <button onclick="edit(${i})">Edit</button>
                  </td>
              </tr>
          `;
    }
    table.innerHTML = str;
    showTable();
  }v
