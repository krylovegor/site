function check(){
    q10elem = document.getElementById("q10");
   q11elem = document.getElementById("q11");
	q12elem = document.getElementById("q12");
	q13elem = document.getElementById("q13");
    if (q10elem.checked) 
	{ if (q11elem.checked)
	{if (q12elem.checked)
	{if (q13elem.checked)
	     {alert("no") } 
		  else {alert("yes")}
	   }
	   else {alert("no")}
	}
	else {alert("no")}
	}
	else{alert("no")}
	var inp = document.getElementsByName('вопрос2');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            alert("selected: " + inp[i].value);
        }
    }
	q4elem = document.getElementById("q4")
    answer = q4elem.value;
    alert("Точно"+answer+"?");

    }