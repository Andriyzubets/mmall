if (document.querySelector('.sandwich-right-bar .nav-toggle')) {
	let sandwichButton = document.querySelector('.sandwich-right-bar .nav-toggle');
	let sandFullMenu = document.querySelector('.sandwich-right-bar .right-menu');
	let sandFullBg = document.querySelector('.sandwich-right-bar .bg');
	sandwichButton.onclick = function() {
		if(sandwichButton.classList.contains('active')){
			sandwichButton.classList.remove('active');
			sandFullMenu.classList.remove('active')
			sandFullBg.classList.remove('active')
		} else {
			sandwichButton.classList.add('active');
			sandFullMenu.classList.add('active');
			sandFullBg.classList.add('active');
		}
	}
	sandFullBg.onclick = function() {
		if(sandwichButton.classList.contains('active')){
			sandwichButton.classList.remove('active');
			sandFullMenu.classList.remove('active')
			sandFullBg.classList.remove('active')
		}
	}
}
// function writeTextByJS(id, text, speed){

// 	var ele = document.getElementById(id),
// 	    txt = text.join("").split("");

// 	var interval = setInterval(function(){

// 		if(!txt[0]){

// 			return clearInterval(interval);
// 		};

// 		ele.innerHTML += txt.shift();
// 	}, speed != undefined ? speed : 70);

// 	return false;
// };
// writeTextByJS(
// 	"demo",
// 	[
// 		`Become a co-owner of a large-scale startup`
// 	]
// );
scroll = document.body.scrollTop;
mainLinks = document.querySelectorAll('.main-menu li');
smartLinks = document.querySelectorAll('.right-menu li');
targets = document.querySelectorAll('.anchor-target');
fadeUps = document.querySelectorAll('.fade-up');
fadeLefts = document.querySelectorAll('.fade-left');
windowHeight = window.innerHeight;
window.addEventListener('scroll', function() {
	scroll = window.pageYOffset || document.documentElement.scroll;
	if(scroll > 30) {
		document.querySelector('.nav').classList.add('fixed')
	} else {
		document.querySelector('.nav').classList.remove('fixed')
	}
	for(i=0;i<fadeUps.length;i++){
		tops = fadeUps[i].getBoundingClientRect().top;
		if(tops<windowHeight*.7) {
			fadeUps[i].classList.add('fade-up-done')
		} else {
			fadeUps[i].classList.remove('fade-up-done')
		}
	}
	for(i=0;i<fadeLefts.length;i++){
		tops = fadeLefts[i].getBoundingClientRect().top;
		if(tops<windowHeight*.7) {
			fadeLefts[i].classList.add('fade-left-done')
		} else {
			fadeLefts[i].classList.remove('fade-left-done')
		}
	}
	if(targets[1].getBoundingClientRect().top<100) {
		if(!mainLinks[1].classList.contains('active')) {
			for(i=0;i<mainLinks.length;i++){
				mainLinks[i].classList.remove('active');
			}
			mainLinks[1].classList.add('active')
		}
	} 
	if(targets[1].getBoundingClientRect().top>=100) {
		if(!mainLinks[0].classList.contains('active')) {
			for(i=0;i<mainLinks.length;i++){
				mainLinks[i].classList.remove('active');
			}
			mainLinks[0].classList.add('active')
		}
	} 
	if(targets[2].getBoundingClientRect().top<100) {
		if(!mainLinks[2].classList.contains('active')) {
			for(i=0;i<mainLinks.length;i++){
				mainLinks[i].classList.remove('active');
			}
			mainLinks[2].classList.add('active')
		}
	}
	if(targets[3].getBoundingClientRect().top<100) {
		if(!mainLinks[3].classList.contains('active')) {
			for(i=0;i<mainLinks.length;i++){
				mainLinks[i].classList.remove('active');
			}
			mainLinks[3].classList.add('active')
		}
	}
	if(targets[4].getBoundingClientRect().top<100) {
		if(!mainLinks[4].classList.contains('active')) {
			for(i=0;i<mainLinks.length;i++){
				mainLinks[i].classList.remove('active');
			}
			mainLinks[4].classList.add('active')
		}
	} 
	if(targets[5].getBoundingClientRect().top<100) {
		if(!mainLinks[5].classList.contains('active')) {
			for(i=0;i<mainLinks.length;i++){
				mainLinks[i].classList.remove('active');
			}
			mainLinks[5].classList.add('active')
		}
	} 
});
if(document.querySelector('.main-slider')) {
	// setInterval(function(){
	// 	changeSl();
	// },4000)
	slides = document.querySelectorAll('.main-slider .slide')
	function changeSl() {
		if(slides[0].classList.contains('active')) {
			slides[0].classList.remove('active');
			slides[1].classList.add('active');
		} else {
			slides[1].classList.remove('active');
			slides[0].classList.add('active');
		}
	}
}
if(document.querySelector('.services .items')) {
	h3s = document.querySelectorAll('.services .items h3');
	tempArr = [];
	for(i=0;i<h3s.length;i++) {
		tempArr.push(h3s[i].offsetHeight);
	}
	tempArr.sort()
	for(i=0;i<h3s.length;i++) {
		h3s[i].style.minHeight=tempArr[tempArr.length-1]+'px';
	}
}
google.maps.event.addDomListener(window, 'load', init);
function init() {
	var mapOptions = {
		zoom: 13,
		scrollwheel: false,
		disableDefaultUI: true,
		center: new google.maps.LatLng(50.4527651, 30.5193404),
		styles: [
		{
			"featureType":"all",
			"elementType":"labels",
			"stylers":[
			{
				"visibility":"off"
			}
			]
		},
		{
			"featureType":"all",
			"elementType":"labels.text",
			"stylers":[
			{
				"visibility":"on"
			}
			]
		},
		{
			"featureType":"all",
			"elementType":"labels.text.fill",
			"stylers":[
			{
				"color":"#000000"
			}
			]
		},
		{
			"featureType":"all",
			"elementType":"labels.text.stroke",
			"stylers":[
			{
				"color":"#ffffff"
			}
			]
		},
		{
			"featureType":"all",
			"elementType":"labels.icon",
			"stylers":[
			{
				"visibility":"on"
			}
			]
		},
		{
			"featureType":"administrative",
			"elementType":"all",
			"stylers":[
			{
				"visibility":"on"
			}
			]
		},
		{
			"featureType":"landscape",
			"elementType":"all",
			"stylers":[
			{
				"color":"#ffffff"
			}
			]
		},
		{
			"featureType":"poi",
			"elementType":"all",
			"stylers":[
			{
				"visibility":"off"
			}
			]
		},
		{
			"featureType":"poi",
			"elementType":"labels",
			"stylers":[
			{
				"visibility":"on"
			}
			]
		},
		{
			"featureType":"road",
			"elementType":"geometry.fill",
			"stylers":[
			{
				"color":"#000000"
			},
			{
				"weight":1
			}
			]
		},
		{
			"featureType":"road",
			"elementType":"geometry.stroke",
			"stylers":[
			{
				"color":"#000000"
			},
			{
				"weight":0.8
			}
			]
		},
		{
			"featureType":"road",
			"elementType":"labels",
			"stylers":[
			{
				"visibility":"off"
			}
			]
		},
		{
			"featureType":"transit",
			"elementType":"all",
			"stylers":[
			{
				"visibility":"off"
			}
			]
		},
		{
			"featureType":"water",
			"elementType":"all",
			"stylers":[
			{
				"visibility":"on"
			},
			{
				"color":"#ffff00"
			}
			]
		}
		]
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(50.4427651, 30.5193404),
		map: map,
		title: 'Bearcode'
	});
}
// Плавный скрол
function anchorScroller(el, duration) {
	if (this.criticalSection) {
		return false;
	}
	if ((typeof el != 'object') || (typeof el.href != 'string'))
		return true;
	var address = el.href.split('#');
	if (address.length < 2)
		return true;
	address = address[address.length-1];
	el = 0;
	for (var i=0; i<document.anchors.length; i++) {
		if (document.anchors[i].name == address) {
			el = document.anchors[i];
			break;
		}
	}
	if (el === 0)
		return true;
	this.stopX = 0;
	this.stopY = 0;
	do {
		this.stopX += el.offsetLeft;
		this.stopY += el.offsetTop;
	} while (el = el.offsetParent);
	this.startX = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
	this.startY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	this. stopX = this.stopX - this.startX;
	this.stopY = this.stopY - this.startY;
	if ( (this.stopX == 0) && (this.stopY == 0) )
		return false;
	this.criticalSection = true;
	if (typeof duration == 'undefined')
		this.duration = 700;
	else
		this.duration = duration;
	var date = new Date();
	this.start = date.getTime();
	this.timer = setInterval(function () {
		var date = new Date();
		var X = (date.getTime() - this.start) / this.duration;
		if (X > 1)
			X = 1;
		var Y = ((-Math.cos(X*Math.PI)/2) + 0.5);
		cX = Math.round(this.startX + this.stopX*Y);
		cY = Math.round(this.startY + this.stopY*Y);
		document.documentElement.scrollLeft = cX;
		document.documentElement.scrollTop = cY;
		document.body.scrollLeft = cX;
		document.body.scrollTop = cY;
		if (X == 1) {
			clearInterval( this.timer);
			this.criticalSection = false;
		}
	}, 10);
	return false;
}

