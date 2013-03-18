$(document).ready(function(){   

function notValid(e,title) {
	$(e).removeClass("valid").addClass("notvalid");
	$(e).attr("title",title);
}

function valid(e) {
	$(e).removeClass("notvalid").addClass("valid");
	$(e).removeAttr("title");
}

function testN(f) {
	var v = f.value;
	if (v == ""){ notValid(f,"set name"); return "set name.\n"; };
	if (/[\\\/\:\"\'\#\!\%\$\%\&]/.test(v)){ notValid(f,"wrong name");  return "wrong name.\n"; };
	valid(f);
	return "";
}

function testP(f) {
	var v = f.value;
	if (v == ""){ notValid(f,"set password");  return "set password.\n"; };
	valid(f);
	return "";
}

function testPP(f,f2) {
	var v = f.value;
	var v2 = f2.value;
	if (v != v2){ notValid(f2,"passwords do not match");  return "passwords do not match.\n"; };
	valid(f2);
	return "";
}

function testE(f) {
	var v = f.value;
	if (v == ""){ notValid(f,"set email"); return "set email.\n"; };
	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/i.test(v))){notValid(f,"wrong email"); return "wrong email.\n"; };
	valid(f);
	return "";
}



$('#formsignin').submit(function(form) {
	var f = form.target;

	var mesg = testE(f.email);
	mesg += testP(f.pass);
	
	if (mesg == "") {
		alert('OK');
		form.preventDefault();	
	}else{
		console.log(mesg);
		form.preventDefault();	
	}
});

$('#formsignup').submit(function(form) {
	var f = form.target;

	var mesg = testN(f.name);
	mesg += testE(f.email);
	mesg += testP(f.pass);
	mesg += testPP(f.pass,f.pass2);
	
	if (mesg == "") {
		alert('OK');
		form.preventDefault();	
	}else{
		console.log(mesg);
		form.preventDefault();	
	}
});


 });