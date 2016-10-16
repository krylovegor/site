function check(){
	q4elem = document.getElementById("q4")
    document.forms [0].q4elem.value
    q10elem = document.getElementById("q10");
   q11elem = document.getElementById("q11");
	q12elem = document.getElementById("q12");
	q13elem = document.getElementById("q13");
    if (q10elem.checked) 
	{ if (q11elem.checked)
	{if (q12elem.checked)
	{if (q13elem.checked)
	     {alert("Первый вопрос: Неверно") } 
		  else {alert("Первый вопрос: Верно")}
	   }
	   else {alert("Первый вопрос: Неверно")}
	}
	else {alert("Первый вопрос: Неверно")}
	}
	else{alert("Первый вопрос: Неверно")}
	var inp = document.getElementsByName('вопрос2');
        if (inp[0].type == "radio" && inp[0].checked) {
            alert("Второй вопрос: Верно" );
        } 
		else {alert("Второй вопрос: Неверно")}
		var inp = document.getElementsByName('вопрос3');
        if (inp[2].type == "radio" && inp[2].checked) {
            alert("Верно" );
        } 
		else {alert("Неверно")}
    }