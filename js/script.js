//ajax function
function changeAjax(url, difFunction){

	var xhttp;
	// xhttp = window.XMLHttpRequest? new XMLHttpRequest()
	// : new ActiveXObject("Microsoft.XMLHTTP");


	if(window.XMLHttpRequest){
		xhttp = new XMLHttpRequest();
	}else{
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhttp.onreadystatechange = function(){

		if(xhttp.readyState == 4 && xhttp.status == 200){

			difFunction(xhttp);
		}
	}

	xhttp.open("GET", url, true);
	xhttp.send(null);  
}


function changeTitle(xhttp){
	document.getElementById("title").innerHTML
		= xhttp.responseText;
}

function changeContent(xhttp){
	document.getElementById("content").innerHTML
		= xhttp.responseText;
}



