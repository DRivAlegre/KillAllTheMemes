var initial = 30;
var finale = 59;
var maxScroll = -1;

window.addEventListener("scroll",function(){
	var scroll = scroller();
	//var scroll_size = scrollSize();
	/*console.log("Info:\nScroll bar: " + scroll + "\nmaxScroll: " + maxScroll);*/

	// Corregir el reScrolling 
    if(scroll == maxScroll){
		var imgNs = JSON.parse("[" + localStorage.getItem("ls.imgs") + "]")[0];
		var sectionmain = document.getElementsByClassName("content")[0];
		for(var j = initial;j < finale;j++){
		   	var node = document.createElement("figure");
		   	node.className = "pict ng-scope";
		   	var img_img = document.createElement("img");
		   	img_img.src = imgNs[j].url;
		   	node.appendChild(img_img);
		   	getSocialButtons(node);
		   	sectionmain.appendChild(node);
		}
		initial += 70;
		finale += 70;
    }
    else if(scroll > maxScroll){
    	maxScroll = scroll;
    }
});

var scroller = function(){
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		return scrollT;
}
var scrollSize = function(){
	    var element = document.getElementsByTagName("body")[0];
	    var scroll_size = element.offsetHeight || element.style.pixelHeight;
	    return scroll_size;
}


function getSocialButtons(elem){
	var social = document.createElement("div");
	social.className = "social";
	social.innerHTML = "<div class='facebook'><div id='fb-root'></div><div class='fb-share-button' data-href='http://drivalegre.github.io/KillAllTheMemes' data-layout='button'></div><div class='twitter'><a href='https://twitter.com/share' class='twitter-share-button' data-url='http://tinyurl.com/pspy8u9' data-text='¿Harto de los memes? Nosotros también!' data-count='none' data-hashtags='KillAllTheMemes'>Tweet</a></div>";
	elem.appendChild(social);
}

