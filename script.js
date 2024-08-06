let groceryList = [];
/*
* This function will add every third item added to the list
*/
function handleSubmit(event) {
    event.preventDefault();
    let ingredient = document.getElementById('ingredient').value;
    //adds the item to the groceryList array.
    groceryList.push(ingredient);
    let tbody = document.getElementById('ingredient-list');
    
    tbody.innerHTML = '';
    //for loops allows you to add the third item in the groceryList array.
    for (let i=0; i<groceryList.length; i += 3) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td class='table-entry'>${groceryList[i] || ''}</td>
            <td class='table-entry'>${groceryList[i + 1] || ''}</td>
            <td class='table-entry'>${groceryList[i + 2] || ''}</td>
        `;
        tbody.appendChild(row);
    }
    //sets the input to blank after pressing enter.
    document.getElementById('input').value = '';
}
