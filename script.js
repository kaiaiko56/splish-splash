function changeImage(e) {
	let h = window.innerHeight;
	let w = window.innerWidth;
	mouseX = e.clientX;
	mouseY = e.clientY;
	mouseSlope = (mouseY/mouseX);
	diag1 = (h/w);
	let d1 = mouseSlope > diag1
	mouseSlope2 = ((h-mouseY)/mouseX);
	diag2 = (h/w);
	let d2 = mouseSlope2 > diag2;
	if (d1 && d2) {
		// console.log("left")
		document.getElementById("left-img").style.display = "block";
		document.getElementById("top-img").style.display = "none";
		document.getElementById("right-img").style.display = "none";
		document.getElementById("bottom-img").style.display= "none";
		document.getElementById("audioleft").play();
		document.getElementById("audiotop").pause();
		document.getElementById("audioright").pause();
		document.getElementById("audiobottom").pause();
	}
	else if (!d1 && d2) {
		// console.log ("top")
		document.getElementById("left-img").style.display = "none";
		document.getElementById("top-img").style.display = "block";
		document.getElementById("right-img").style.display = "none";
		document.getElementById("bottom-img").style.display= "none";
		document.getElementById("audioleft").pause();
		document.getElementById("audiotop").play();
		document.getElementById("audioright").pause();
		document.getElementById("audiobottom").pause();
		// console.log("top image");
		// window.open("index.html", "_blank");
	}
	else if (!d1 && !d2) {
		// console.log("right")
		document.getElementById("left-img").style.display = "none";
		document.getElementById("top-img").style.display = "none";
		document.getElementById("right-img").style.display = "block";
		document.getElementById("bottom-img").style.display= "none";
		document.getElementById("audioleft").pause();
		document.getElementById("audiotop").pause();
		document.getElementById("audioright").play();
		document.getElementById("audiobottom").pause();
	}
	else if (d1 && !d2) {
		// console.log("bottom")
		document.getElementById("left-img").style.display = "none";
		document.getElementById("top-img").style.display = "none";
		document.getElementById("right-img").style.display = "none";
		document.getElementById("bottom-img").style.display= "block";
		document.getElementById("audioleft").pause();
		document.getElementById("audiotop").pause();
		document.getElementById("audioright").pause();
		document.getElementById("audiobottom").play();
		// console.log("bottom image");
		// window.open("remix.html", "_blank");
	}
}
var checkIndex = true
var checkRemix = false
function changePage(e) {
	let h = window.innerHeight;
	let w = window.innerWidth;
	mouseX = e.clientX;
	mouseY = e.clientY;
	mouseSlope = (mouseY/mouseX);
	diag1 = (h/w);
	let d1 = mouseSlope > diag1
	mouseSlope2 = ((h-mouseY)/mouseX);
	diag2 = (h/w);
	let d2 = mouseSlope2 > diag2;
	if (!d1 && d2 && checkRemix && !checkIndex) {
		// console.log ("top")
		// console.log("top image clicked");
		window.open("remix.html", "_blank");
		checkRemix = false;
		checkIndex = true;
		console.log(checkRemix);
		console.log(checkIndex);
	}
	else if (d1 && !d2 && !checkRemix && checkIndex) {
		// console.log("bottom")
		// console.log("bottom image clicked");
		window.open("index.html", "_blank");
		checkRemix = true;
		checkIndex = false;
		console.log(checkRemix);
		console.log(checkIndex);
	}
}
