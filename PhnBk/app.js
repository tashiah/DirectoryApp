var nm, ph;

function newHtml(){
	document.getElementById("hd").innerHTML = "Add Subscriber";
	document.getElementById("addbtn").style.display = "none";
	document.getElementById("backbtn").style.display = "block";
	document.getElementById("details").style.display = "none";
	var html ='Name: <br> <input type="text" id="name" onkeyup="doChange1()"/> <br><br>';
	html +='Phone: <br> <input type="text" id="phone" onkeyup="doChange2()"/> <br><br>';
	html+='<span>Subscriber to be added is:</span> <br>';
	html+='Name: <span id="change1"/> </span> <br>';
	html+='Phone: <span id="change2"/> </span> <br><br>';
	html +='<button class="btn1" id="new-addbtn" onclick="store();">Add</button>';
	document.getElementById("new-record").innerHTML = html;
}

function doChange1(){
	var x=document.getElementById("name");
	var y=document.getElementById("change1");
	y.innerHTML= x.value;
	nm=x.value;
}

function doChange2(){
	var x=document.getElementById("phone");
	var y=document.getElementById("change2");
	y.innerHTML= x.value;
	ph=x.value;
}


function store(){
	document.getElementById("addbtn").style.display = "block";
	document.getElementById("backbtn").style.display = "none";
	document.getElementById("new-record").style.display = "none";
	var details=document.getElementById("details");
	details.style.display = "grid";
	var html='<div class="grid-item"><div class="item">'+nm+
	'</div><div>'+ph+
	'</div><div><button onclick="delete();">Delete</button></div>'+
	'</div>';
	details.innerHTML = details.innerHTML + html;
}

function delete(){

}