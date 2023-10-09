 console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.fullscreenEnabled);
document.title = "sharpnerassignment";

//selectors: 1- GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
// or we can use varible
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
headerTitle.textContent = 'HELLO SHARPENER';
//headerTitle.innerText = 'WELCOME';
header.style.borderBottom = 'solid 3px #000';
headerTitle.style.color= 'yellow'; 
var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[2]);
//items[2].style.backgroundColor = 'green';


for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
var li = document.getElementsByTagName('li');
for(var i=0; i<li.length; i++){
    li[i].style.fontWeight = 'bold';
}
// QUERYSELECTOR //
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItem);
//secondItem.style.color = 'green';
//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display= 'none';

// Queryselectorall//
//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i= 0; i<odd.length; i++){
//    odd[i].style.backgroundColor='green';
//}
  

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
//ParentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='aqua';
//console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement //
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='aqua';
console.log(itemList.parentElement.parentElement.parentElement);

//children//
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow"

//Firstchild//
console.log(itemList.firstChild);
// firstElementchild // lastElementchild //
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'hellow';

//nextElementsibling // previousElementSibling //
console.log(itemList.previousElementSibling);


//CreatElement//
var newDiv = document.createElement('div');
//add class and id & Attribute //
newDiv.className = 'Dom';
newDiv.id='Dom1';
newDiv.setAttribute('title' , 'Hello Div');
// Create a text node //
var newDivText = document.createTextNode('Hello');
//Add text node to div //
newDiv.appendChild(newDivText);
//console.log(newDiv);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize='40px';
container.insertBefore(newDiv , h1);
//console.log(newDiv);
var newnode = document.getElementById('items');
newnode.innerHTML = '<li>Hello</li>'+ newnode.innerHTML;


