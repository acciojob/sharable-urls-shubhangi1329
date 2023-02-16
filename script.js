// your code here
var name=document.querySelector('#name');
var year=document.querySelector('#year');
var btn=document.querySelector('#button');
var form=document.querySelector('form');
function shareurl(event){
	event.preventDefault();
	var h3value='https://localhost:8080/';
	var nameel=name.value;
	var yearel=year.value;
	if(nameel && yearel){
		h3value+='?name='+nameel+'&year='+yearel;  
	}
	else if(!nameel && yearel){
		h3value+='?year='+yearel;
	}
	else if(!yearel && nameel){
		h3value+='?name='+nameel;
		
	}
	h3.textContent=h3value;
}
form.addEventListener('submit',shareurl);