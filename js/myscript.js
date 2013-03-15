$(document).ready(function(){   

function testN(filed) {
	if (filed == "") return "set name.\n" ;
	if (/[\\\/\:\"\'\#\!\%\$\%\&]/.test(filed)) return "wrong name.\n";
	return "";
}

function testP(filed) {
	if (filed == "") return "set password.\n" ;
	return "";
}

function testPP(filed,filed2) {
	if (filed != filed2) return "passwords do not match.\n" ;
	return "";
}

function testE(filed) {
	if (filed == "") return "set email.\n";
	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/i.test(filed))) return "wrong email.\n" ;

	return "";
}


$('#formsignin').submit(function(form) {
	var f = form.target;

	var mesg = testE(f.email.value);
	mesg += testP(f.pass.value);
	
	if (mesg == "") {
		alert('OK');
		form.preventDefault();	
	}else{
		alert(mesg);
		form.preventDefault();	
	}
});

$('#formsignup').submit(function(form) {
	var f = form.target;

	var mesg = testN(f.name.value);
	mesg += testE(f.email.value);
	mesg += testP(f.pass.value);
	mesg += testPP(f.pass.value,f.pass2.value);
	
	if (mesg == "") {
		alert('OK');
		form.preventDefault();	
	}else{
		alert(mesg);
		form.preventDefault();	
	}
});


 });