var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//filter Event
filter.addEventListener('keyup', filterItems);


//add item
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
    var discription = document.getElementById('discription').value;



    //create new li element 
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(discription));



    // Create delete button
    var deleteBtn = document.createElement('button');
    // Add class to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li);

}

//Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}

//Filter Item
function filterItems(e) {
    //convert to lower case
    var text = e.target.value.toLowerCase();
    //Get lis
    var items = itemList.getElementsByTagName('li');

    //Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var discription = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || discription.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none'
        }
    });
}