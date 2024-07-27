// let names = [];
// const inputName = document.getElementById("inputName").value.trim();
// const nameList = document.getElementById("nameList");
// const nameSearch = document.getElementById("nameSearch").value.tolowercase();

// function nameAdd() {
//     if (inputName) {
//         names.push(inputName);
//         inputName.value = '';
//         displayNames();
//     }
// }
// function displayNames(filteredNames = names) {
//     nameList.innerHTML = '';
//     filteredNames.forEach(inputName => {
//         const li = document.createElement("li");
//         li.textContent = inputName;
//         nameList.appendChild(li);
//     });
// }

// function nameSort(order) {
//     if (order === 'asc') {
//         names.sort();
//     } else if(order === 'desc'){
//         names.sort().reverse();
//     }
//     displayNames()
// }

// function nameSearch() {
//     const filteredNames = names.filter(inputName => inputName.tolowercase().includes(nameSearch));
//     displayNames(filteredNames);
// }

let names = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name) {
        names.push(name);
        nameInput.value = '';
        displayNames();
    }
}

function displayNames(filteredNames = names) {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    filteredNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function sortNames(order) {
    if (order === 'asc') {
        names.sort();
    } else if (order === 'desc') {
        names.sort().reverse();
    }
    displayNames();
}

function searchNames() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();
    const filteredNames = names.filter(name => name.toLowerCase().includes(query));
    displayNames(filteredNames);
}
