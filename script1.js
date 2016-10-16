function check(){
	q4elem = document.getElementById("q4")
    answer = q4elem.value;
    alert("Имя: "+answer);
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
            alert("Третий вопрос: Верно" );
        } 
		else {alert("Третий вопрос: Неверно")}
    }
function show_start(){
//alert('hi');
var c0_elem = document.getElementById("c0");
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c0_elem.style.display = 'block';
c1_elem.style.display='none';
c2_elem.style.display = 'none';
c3_elem.style.display = 'none';
c4_elem.style.display = 'none';
}
function show_pic(){
//alert('hi');
var c0_elem = document.getElementById("c0");
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c0_elem.style.display='none';
c1_elem.style.display='none';
c2_elem.style.display = 'block';
c3_elem.style.display = 'none';
c4_elem.style.display = 'none';
}
function show_text(){
var c0_elem = document.getElementById("c0");
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c0_elem.style.display='none';
c1_elem.style.display='block';
c2_elem.style.display = 'none';
c3_elem.style.display = 'none';
c4_elem.style.display = 'none';
}	
function show_game() {
    var c0_elem = document.getElementById("c0");
	var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    var c4_elem = document.getElementById("c4");
	c0_elem.style.display='none';
	c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
	c4_elem.style.display = 'none';
}
function show_gal(){
//alert('hi');
var c0_elem = document.getElementById("c0");
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
var c4_elem = document.getElementById("c4");
c0_elem.style.display='none';
c1_elem.style.display='none';
c2_elem.style.display = 'none';
c3_elem.style.display = 'none';
c4_elem.style.display = 'block';
}
ymaps.ready(function(){
		var myMap = new ymaps.Map("map", {
        center: [52.19, 20.85],
        zoom: 6
    }),
    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",// тип геометрии - точка
            coordinates: [52.19, 20.85] // координаты точки
       }
    });
	myMap.geoObjects.add(myGeoObject);
	var coords = new YMaps.GeoPoint(52.19,20.85),
placemark = new YMaps.Placemark(coords);
placemark.name = "Имя метки"; // Заголовок балуна
placemark.description = "Описание метки"; // Текст балуна
map.addOverlay(placemark);

    });