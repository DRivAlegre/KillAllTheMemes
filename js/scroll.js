var initial = 30;
var finale = 59;
var maxScroll = -1;

window.addEventListener("scroll",function(){
	var scroll = scroller();
	//var scroll_size = scrollSize();
	console.log("Info:\nScroll bar: " + scroll + "\nmaxScroll: " + maxScroll);

	// Corregir el reScrolling 
	// Posiblemente haya que calcular el maxScroll para encontrar el tope y no calcularlo con el scroll_size
    if(scroll == maxScroll){
		var imgNs = JSON.parse("[" + localStorage.getItem("ls.imgs") + "]")[0];
		var sectionmain = document.getElementsByClassName("content")[0];
		for(var j = initial;j < finale;j++){
		   	var node = document.createElement("figure");
		   	node.className = "pict ng-scope";
		   	var img_img = document.createElement("img");
		   	img_img.src = imgNs[j].url;
		   	node.appendChild(img_img);
		   	/*getSocialButtons(node);*/
		   	sectionmain.appendChild(node);
		}
		if(finale > imgNs.length - 20){
			initial += 0;
			finale += 29;
		}
		else{
			initial += 70;
			finale += 70;
		}
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


/*function getSocialButtons(elem){
	var social = document.createElement("div");
	social.className = "social";
	social.innerHTML = "<div class='facebook'><div id='fb-root'></div><div class='fb-like' data-href='https://drivalegre.github.io/KillAllTheMemes' data-layout='button' data-action='like' data-show-faces='false' data-share='true'></div><div class='twitter'><a href='https://twitter.com/share' class='twitter-share-button' data-url='http://drivalegre.github.io/KillAllTheMemes' data-text='http://fyslab.net/killallthememes' data-related='killallthememes' data-count='none' data-hashtags='KillAllTheMemes'>Tweet</a></div>";
	elem.appendChild(social);
}*/
