
let state = {
    list:[
        {
            title: "Google",
            url: "https://google.com",
            difficulty: "2",
            tags: ["JS", "HTML"],
        },
    ],
    idxEdit: null,
    difficulty: {
        "":"",
        0: "Entry level",
        1: "Easy",
        2: "Medium",
        3: "Hard",
        4: "Hacker",
    },

};

function draw(){
    let table = document.querySelector("#list tbody");
    let str="";
    for (let i=0; i<state.list.length; i++){
        let elem = state.list[i];

        str+= `
            <tr>
                <td><a href="${elem.url}" target = "_blank">${elem.title}</a></td>
                <td>${state.difficulty[elem.difficulty]}</td>
                <td>${elem.tags.join(", ")}</td>
                <td>
                <button onclick="del(${i})">delete</button>
                <button onclick="edit(${i})">edit</button>
                
                </td>
            </tr>
            `;
    }
    table.innerHTML = str;

}

function edit(idx){
    let elem = state.list[idx];
    let title = document.querySelector("[name='title']").value = elem.title;
    let title = document.querySelector("[name='title']").value = elem.title;
    let title = document.querySelector("[name='title']").value = elem.title;

    let addTagBtn = document.querySelector("#addTag")
    for (let i=0; i<elem.tags.length; i++){
        addTag(button,)
    }
}

function del(idx){
    if (confirm(`Esti sigur ca vrei sa stergi linkul: ${state.list[idx].title}?`))
    {
        state.list.splice(idx,1);
        draw();
    }
  

}


function adauga(event){
event.preventDefault();
let title = document.querySelector("[name='title']").value.trim();
let url = document.querySelector("[name='url']").value.trim();
let difficulty = document.querySelector("[name='difficulty']").value.trim();
let tagInputs = document.querySelectorAll("[name = 'tags']");
let tags = [];
for (let input of tagInputs){
    if (input.value.trim() !== ""){
        tags.push(input.value.trim());
    }
}
state.list.push({
    title: title,
    url: url,
    difficulty: difficulty,
    tags: tags,

});
draw();
}

function addTag(event){
    // pentru ca click face sa apara submit
    if (event !== undefined && event ){
    event.preventDefault();
    }
        
        button.parentElement.insertAdjacentHTML('beforeend',
        `</br><input type="text" placeholder="Tag" name = "tags" />`);

}
