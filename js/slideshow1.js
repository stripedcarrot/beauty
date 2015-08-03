// get listed html pic by element id
var pix = document.getElementById("treatments");
//add pics into array for slideshow
var picsArray = ["images/slideshow1.jpg",
		 "images/slideshow2.jpg",
		 "images/slideshow3.jpg",
		 "images/slideshow4.jpg",
		 "images/slideshow5.jpg",
		 "images/slideshow6.jpg",];
//set counter to zero
var count = 0;
//loop through array resetting to zero when last pic in array reached to loop again
function slideShow() {
	pix.setAttribute("src",picsArray[count]);
	count++;
	if (count >= picsArray.length) {
		count = 0;
	}
}

// setInterval is  in milliseconds
var intervalHandle = setInterval(slideShow,1000);

// to stop slideshow click on pic
pix.onclick =  function() {
	clearInterval(intervalHandle);
};
// show alt style page using switch method
var defaultStyleLink,altStyleLink
defaultStyleLink = document.getElementById("regular");
altStyleLink = document.getElementById("different");

function setActiveStyleSheet( styleId ) {

 var i = 0;
 var linkItem, linkArray;
 
 linkArray = document.getElementsByTagName("link");
 
 for(i= 0 ; i < linkArray.length; i++){
	
	linkItem = linkArray[i];
 
	if ( linkItem.getAttribute("rel").indexOf("style") != -1 && linkItem.getAttribute("title") ) {
		linkItem.disabled = true;
			if (linkItem.getAttribute("title") === styleId ) {
				linkItem.disabled = false;
			}
	}	
 }
}
defaultStyleLink.onclick = function() {
setActiveStyleSheet( this.id );
};
altStyleLink.onclick = function() {
setActiveStyleSheet( this.id );
};


