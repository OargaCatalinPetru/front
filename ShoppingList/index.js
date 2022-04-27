
var selectedRow = null

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


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<button onclick="markItem();"> &nbsp;&nbsp;&nbsp;  Mark as buyed </button>`;
    
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

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
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
    
    document.getElementById("inputName").classList.add('marked');



}

function sortAsc (a,b) {
    if (a.formData.name.toLowerCase() < b.formData.name.toLowerCase()){
        return -1;
    }
    if (a.formData.name.toLowerCase() > b.formData.name.toLowerCase()){
    return 1;
    }
    else{
        return 0;
        
    }
    
};
