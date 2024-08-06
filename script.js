let groceryList = [];

function handleSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('input').value;
    groceryList.push(input);
    let tbody = document.getElementById('ingredient-list');
    
    // Update the content of the 'trial' div with the input value
    tbody.innerHTML = '';

    for (let i=0; i<groceryList.length; i += 3) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${groceryList[i] || ''}</td>
            <td>${groceryList[i + 1] || ''}</td>
            <td>${groceryList[i + 2] || ''}</td>
        `;
        tbody.appendChild(row);
    }
    document.getElementById('input') = '';
}
