// your code here
var name=querySelector('#name');
var year=querySelector('#year');
var btn=querySelector('#button');
var form=querySelector('form');
function shareurl(event){
	var h3value=' https://localhost:8080/';
	if(name.value && year.value){
		h3value+='?name='+name.value+'&year='+year.value;  
	}
	else if(!name.value && year.value){
		h3value+='?year='+year.value;
	}
	else if(!year.value && name.value){
		h3value+='?name='+name.value;
		
	}
	h3.textContent=h3value;
}
form.addEventListener('click',shareurl);