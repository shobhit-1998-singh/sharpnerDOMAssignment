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
headerTitle.textContent = 'HELLOW SHARPENER';
//headerTitle.innerText = 'WELCOME';
header.style.borderBottom = 'solid 3px #000';
headerTitle.style.color= 'yellow'; 
var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = 'green';


for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
var li = document.getElementsByTagName('li');
for(var i=0; i<li.length; i++){
    li[i].style.fontWeight = 'bold';
}
