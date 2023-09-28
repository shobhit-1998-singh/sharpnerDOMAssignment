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