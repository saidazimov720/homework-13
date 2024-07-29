let names = [];
const nameInput = document.getElementById('nameInput');
const nameList = document.getElementById('nameList');
const searchInput = document.getElementById('searchInput');

function addName() {
    const name = nameInput.value.trim();

    if (name) {
        names.push(name);
        nameInput.value = '';
        displayNames();
    }
}

function displayNames(filteredNames = names) {
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
    
    const query = searchInput.value.toLowerCase();
    const filteredNames = names.filter(name => name.toLowerCase().includes(query));
    displayNames(filteredNames);
}
