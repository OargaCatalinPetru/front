
var selectedRow = null;
var complete = false;
var list = [];

function readFormData(){
    let formData = {};
    formData ["name"] = document.getElementById("inputName").value;
    return formData;
}


function onFormSubmit() {
    document.getElementById("employeeList").classList.remove("hide");
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


function insertNewRecord(formData) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = `<div id="selectedInput"> ${formData.name}`;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<button onclick="markItem();"> &nbsp;&nbsp;&nbsp;  Mark as buyed </button>`;
    list.push(formData.name);
}



function resetForm() {
    document.getElementById("inputName").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputName").value = selectedRow.cells[0].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
}

function validate() {
    isValid = true;
    if (document.getElementById("inputName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function markItem(){
    elem = document.getElementById("selectedInput");
    if (selectedRow === null ){
        elem.classList.add("marked");
    }
    else {
        elem.classList.remove("marked");
    }
    complete = true;
    
}

function sortAsc () {
    list.sort(sortList);
    };

function sortList (a, b){
    if (a.name < b.name){
        return -1;
    } else if (a.name > b.name){
        return 1
    }
    else {
        return 0
}
}
 