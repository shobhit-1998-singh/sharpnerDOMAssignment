var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem)


//add item
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    //create new li element 
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

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
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}