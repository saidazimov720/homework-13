let names = [];
const inputName = document.getElementById("inputName").value.trim();
const nameList = document.getElementById("nameList");
const nameSearch = document.getElementById("nameSearch");

function nameAdd() {
    if (inputName) {
        names.push(inputName);
        inputName.value = '';
        displayNames();
    }
}
