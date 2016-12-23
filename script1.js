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
        center: [52.129029, 19.393702],
        zoom: 6
    })
var myPlacemark = new ymaps.Placemark(
			
				[50.06045, 19.932412] , {
                    
                    hintContent: 'Краков'
                });     
 
 
			myMap.geoObjects.add(myPlacemark);
			var myPlacemark1 = new ymaps.Placemark(
				[51.108249, 17.026901] , {
                    hintContent: 'Вроцлав'
                });     
 
			myMap.geoObjects.add(myPlacemark1);
			var myPlacemark2 = new ymaps.Placemark(
				[52.235576, 21.010265] , {
                    
                    hintContent: 'Варшава'
                });     
 
			myMap.geoObjects.add(myPlacemark2);
	});
	
	hs.graphicsDir = '../highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.outlineType = 'glossy-dark';
hs.wrapperClassName = 'dark';
hs.fadeInOut = true;
//hs.dimmingOpacity = 0.75;

// Add the controlbar
if (hs.addSlideshow) hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		opacity: .6,
		position: 'bottom center',
		hideOnMouseOut: true
	}
});