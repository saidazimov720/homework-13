let names = [];
const inputName = document.getElementById("inputName").value.trim();
const nameList = document.getElementById("nameList");
const nameSearch = document.getElementById("nameSearch").value.tolowercase();

function nameAdd() {
    if (inputName) {
        names.push(inputName);
        inputName.value = '';
        displayNames();
    }
}
function displayNames(filteredNames = names) {
    nameList.innerHTML = '';
    filteredNames.forEach(inputName => {
        const li = document.createElement("li");
        li.textContent = inputName;
        nameList.appendChild(li);
    });
}

function nameSort(order) {
    if (order === 'asc') {
        names.sort();
    } else if(order === 'desc'){
        names.sort().reverse();
    }
    displayNames()
}

function nameSearch() {
    const filteredNames = names.filter(inputName => inputName.tolowercase().includes(nameSearch));
    displayNames(filteredNames);
}